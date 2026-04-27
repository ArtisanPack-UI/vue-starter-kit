<script setup lang="ts">
import { computed, ref } from 'vue';
import { Head, Link, useForm, usePage } from '@inertiajs/vue3';
import { Button, Input } from '@artisanpack-ui/vue/form';
import SettingsLayout from '@/layouts/SettingsLayout.vue';

defineOptions({ layout: SettingsLayout });

interface AuthUser {
    name: string;
    email: string;
    email_verified_at: string | null;
}

defineProps<{
    mustVerifyEmail: boolean;
    status?: string;
}>();

const page = usePage<{
    auth: { user: AuthUser };
    flash: { success?: string };
}>();

const user = computed(() => page.props.auth.user);
const flash = computed(() => page.props.flash);

const profileForm = useForm({
    name: user.value.name,
    email: user.value.email,
});

const deleteForm = useForm({ password: '' });
const deleteOpen = ref(false);

function submitProfile() {
    profileForm.patch('/settings/profile', { preserveScroll: true });
}

function submitDelete() {
    deleteForm.delete('/settings/profile', {
        preserveScroll: true,
        onError: () => deleteForm.reset('password'),
    });
}

function cancelDelete() {
    deleteOpen.value = false;
    deleteForm.reset('password');
    deleteForm.clearErrors();
}
</script>

<template>
    <Head title="Profile" />

    <div>
        <h1 class="text-2xl font-semibold">Profile</h1>
        <p class="text-base-content/70 text-sm">Update your name and email address.</p>
    </div>

    <div v-if="flash.success" class="alert alert-success text-sm">{{ flash.success }}</div>

    <form class="card bg-base-100 shadow" @submit.prevent="submitProfile">
        <div class="card-body space-y-4">
            <Input
                v-model="profileForm.name"
                :error="profileForm.errors.name"
                label="Name"
                autocomplete="name"
                required
            />
            <Input
                v-model="profileForm.email"
                :error="profileForm.errors.email"
                label="Email"
                type="email"
                autocomplete="email"
                required
            />

            <div v-if="mustVerifyEmail && !user.email_verified_at" class="text-sm text-base-content/70">
                Your email address is unverified.
                <Link
                    href="/email/verification-notification"
                    method="post"
                    as="button"
                    class="link link-primary"
                >
                    Click here to re-send the verification email.
                </Link>
                <div v-if="status === 'verification-link-sent'" class="mt-2 text-success">
                    A new verification link has been sent.
                </div>
            </div>

            <div class="card-actions justify-end">
                <Button type="submit" color="primary" :loading="profileForm.processing">Save</Button>
            </div>
        </div>
    </form>

    <div class="card bg-base-100 shadow border border-error/30">
        <div class="card-body space-y-3">
            <h2 class="card-title text-error">Delete account</h2>
            <p class="text-base-content/70 text-sm">
                Once your account is deleted, all of its resources and data will be
                permanently deleted.
            </p>

            <div v-if="!deleteOpen" class="card-actions">
                <Button color="error" @click="deleteOpen = true">Delete account</Button>
            </div>

            <form v-else class="space-y-4" @submit.prevent="submitDelete">
                <Input
                    v-model="deleteForm.password"
                    :error="deleteForm.errors.password"
                    label="Password"
                    type="password"
                    autofocus
                    required
                />
                <div class="card-actions justify-end">
                    <Button type="button" color="ghost" @click="cancelDelete">Cancel</Button>
                    <Button type="submit" color="error" :loading="deleteForm.processing">
                        Permanently delete
                    </Button>
                </div>
            </form>
        </div>
    </div>
</template>
