<script setup lang="ts">
import { Head, Link, useForm } from '@inertiajs/vue3';
import { Button, Checkbox, Input } from '@artisanpack-ui/vue/form';
import AuthLayout from '@/layouts/AuthLayout.vue';
import { register } from '@/routes';
import { request as passwordRequest } from '@/routes/password';
import AuthenticatedSessionController from '@/actions/App/Http/Controllers/Auth/AuthenticatedSessionController';

defineOptions({ layout: AuthLayout });

defineProps<{
    canResetPassword: boolean;
    status?: string;
}>();

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

function submit() {
    form.post(AuthenticatedSessionController.store().url, {
        onFinish: () => form.reset('password'),
    });
}
</script>

<template>
    <Head title="Log in" />
    <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
            <h1 class="card-title justify-center">Log in to your account</h1>
            <div v-if="status" class="alert alert-info text-sm">
                {{ status }}
            </div>

            <form class="flex flex-col gap-4 mt-4" @submit.prevent="submit">
                <Input
                    v-model="form.email"
                    :error="form.errors.email"
                    label="Email address"
                    type="email"
                    autocomplete="email"
                    autofocus
                    required
                />
                <Input
                    v-model="form.password"
                    :error="form.errors.password"
                    label="Password"
                    type="password"
                    autocomplete="current-password"
                    required
                />
                <Checkbox v-model="form.remember" label="Remember me" />

                <div class="flex items-center justify-between mt-2">
                    <Link
                        v-if="canResetPassword"
                        :href="passwordRequest().url"
                        class="link link-primary text-sm"
                    >
                        Forgot your password?
                    </Link>
                    <Button type="submit" color="primary" :loading="form.processing">
                        Log in
                    </Button>
                </div>
            </form>

            <div class="text-center text-sm mt-4 text-base-content/70">
                Don't have an account?
                <Link :href="register().url" class="link link-primary"> Sign up </Link>
            </div>
        </div>
    </div>
</template>
