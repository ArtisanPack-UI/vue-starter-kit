<script setup lang="ts">
import { computed } from 'vue';
import { Head, Link, useForm, usePage } from '@inertiajs/vue3';
import { Button, Input } from '@artisanpack-ui/vue/form';

const page = usePage<{ flash: { success?: string } }>();
const flash = computed(() => page.props.flash);
const url = typeof window !== 'undefined' ? window.location.pathname : '/settings/password';

const NAV = [
    { href: '/settings/profile', label: 'Profile' },
    { href: '/settings/password', label: 'Password' },
    { href: '/settings/appearance', label: 'Appearance' },
];

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
    <main class="min-h-screen bg-base-200 p-6">
        <div class="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
            <aside class="w-full md:w-56 shrink-0">
                <ul class="menu bg-base-100 rounded-box shadow w-full">
                    <li v-for="item in NAV" :key="item.href">
                        <Link :href="item.href" :class="url === item.href ? 'menu-active' : ''">
                            {{ item.label }}
                        </Link>
                    </li>
                </ul>
            </aside>

            <section class="flex-1 space-y-6">
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
                            <Button type="submit" color="primary" :loading="form.processing">
                                Save
                            </Button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    </main>
</template>
