<script setup lang="ts">
import { Head, Link, useForm } from '@inertiajs/vue3';
import { Button, Input } from '@artisanpack-ui/vue/form';
import AuthLayout from '@/layouts/AuthLayout.vue';

defineOptions({ layout: AuthLayout });

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

function submit() {
    form.post('/register', {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
}
</script>

<template>
    <Head title="Register" />
    <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
            <h1 class="card-title justify-center">Create an account</h1>

            <form class="flex flex-col gap-4 mt-4" @submit.prevent="submit">
                <Input
                    v-model="form.name"
                    :error="form.errors.name"
                    label="Name"
                    autocomplete="name"
                    autofocus
                    required
                />
                <Input
                    v-model="form.email"
                    :error="form.errors.email"
                    label="Email address"
                    type="email"
                    autocomplete="email"
                    required
                />
                <Input
                    v-model="form.password"
                    :error="form.errors.password"
                    label="Password"
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

                <div class="flex items-center justify-end mt-2">
                    <Button type="submit" color="primary" :loading="form.processing">Create account</Button>
                </div>
            </form>

            <div class="text-center text-sm mt-4 text-base-content/70">
                Already registered?
                <Link href="/login" class="link link-primary">Log in</Link>
            </div>
        </div>
    </div>
</template>
