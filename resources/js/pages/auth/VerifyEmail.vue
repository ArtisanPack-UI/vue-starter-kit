<script setup lang="ts">
import { Head, Link, useForm } from '@inertiajs/vue3';
import { Button } from '@artisanpack-ui/vue/form';
import AuthLayout from '@/layouts/AuthLayout.vue';

defineOptions({ layout: AuthLayout });

defineProps<{
    status?: string;
}>();

const form = useForm({});

function submit() {
    form.post('/email/verification-notification');
}
</script>

<template>
    <Head title="Verify email" />
    <div class="card bg-base-100 shadow-xl">
        <div class="card-body text-center">
            <h1 class="card-title justify-center">Verify your email</h1>
            <p class="text-sm text-base-content/70">
                Thanks for signing up! Please verify your email address by clicking the link
                we just emailed you. If you didn't receive it, we can send another.
            </p>

            <div v-if="status === 'verification-link-sent'" class="alert alert-success text-sm mt-2">
                A new verification link has been sent to your email address.
            </div>

            <form class="flex flex-col gap-4 mt-4" @submit.prevent="submit">
                <Button type="submit" color="primary" :loading="form.processing">
                    Resend verification email
                </Button>

                <Link
                    href="/logout"
                    method="post"
                    as="button"
                    class="link link-hover text-sm text-base-content/70"
                >
                    Log out
                </Link>
            </form>
        </div>
    </div>
</template>
