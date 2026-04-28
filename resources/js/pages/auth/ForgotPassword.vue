<script setup lang="ts">
import { Head, Link, useForm } from '@inertiajs/vue3';
import { Button, Input } from '@artisanpack-ui/vue/form';
import AuthLayout from '@/layouts/AuthLayout.vue';

defineOptions({ layout: AuthLayout });

defineProps<{
    status?: string;
}>();

const form = useForm({ email: '' });

function submit() {
    form.post('/forgot-password');
}
</script>

<template>
    <Head title="Forgot password" />
    <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
            <h1 class="card-title justify-center">Forgot your password?</h1>
            <p class="text-sm text-base-content/70 text-center">
                Enter your email and we'll send you a link to reset it.
            </p>

            <div v-if="status" class="alert alert-success text-sm mt-2">
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

                <div class="flex items-center justify-between mt-2">
                    <Link href="/login" class="link link-primary text-sm"> Back to login </Link>
                    <Button type="submit" color="primary" :loading="form.processing">
                        Email password reset link
                    </Button>
                </div>
            </form>
        </div>
    </div>
</template>
