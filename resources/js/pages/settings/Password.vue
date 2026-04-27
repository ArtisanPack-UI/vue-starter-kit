<script setup lang="ts">
import { computed } from 'vue';
import { Head, useForm, usePage } from '@inertiajs/vue3';
import { Button, Input } from '@artisanpack-ui/vue/form';
import SettingsLayout from '@/layouts/SettingsLayout.vue';

defineOptions({ layout: SettingsLayout });

const page = usePage<{ flash: { success?: string } }>();
const flash = computed(() => page.props.flash);

const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
});

function submit() {
    form.put('/settings/password', {
        preserveScroll: true,
        onSuccess: () => form.reset(),
        onError: () => {
            if (form.errors.password) form.reset('password', 'password_confirmation');
            if (form.errors.current_password) form.reset('current_password');
        },
    });
}
</script>

<template>
    <Head title="Password" />

    <div>
        <h1 class="text-2xl font-semibold">Update password</h1>
        <p class="text-base-content/70 text-sm">
            Use a long, random password to keep your account secure.
        </p>
    </div>

    <div v-if="flash.success" class="alert alert-success text-sm">{{ flash.success }}</div>

    <form class="card bg-base-100 shadow" @submit.prevent="submit">
        <div class="card-body space-y-4">
            <Input
                v-model="form.current_password"
                :error="form.errors.current_password"
                label="Current password"
                type="password"
                autocomplete="current-password"
                required
            />
            <Input
                v-model="form.password"
                :error="form.errors.password"
                label="New password"
                type="password"
                autocomplete="new-password"
                required
            />
            <Input
                v-model="form.password_confirmation"
                :error="form.errors.password_confirmation"
                label="Confirm password"
                type="password"
                autocomplete="new-password"
                required
            />

            <div class="card-actions justify-end">
                <Button type="submit" color="primary" :loading="form.processing">Save</Button>
            </div>
        </div>
    </form>
</template>
