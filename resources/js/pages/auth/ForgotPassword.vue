<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import { useInertiaForm } from '@artisanpack-ui/vue-laravel';
import { Button, Input } from '@artisanpack-ui/vue/form';

defineProps<{
    status?: string;
}>();

const { form, field } = useInertiaForm({ email: '' });

function submit() {
    form.post('/forgot-password');
}
</script>

<template>
    <Head title="Forgot password" />
    <main class="min-h-screen bg-base-200 flex items-center justify-center p-6">
        <div class="card bg-base-100 shadow-xl max-w-md w-full">
            <div class="card-body">
                <h1 class="card-title justify-center">Forgot your password?</h1>
                <p class="text-sm text-base-content/70 text-center">
                    Enter your email and we'll send you a link to reset it.
                </p>

                <div v-if="status" class="alert alert-success text-sm mt-2">{{ status }}</div>

                <form class="flex flex-col gap-4 mt-4" @submit.prevent="submit">
                    <Input
                        v-bind="field('email')"
                        label="Email address"
                        type="email"
                        autocomplete="email"
                        autofocus
                        required
                    />

                    <div class="flex items-center justify-between mt-2">
                        <Link href="/login" class="link link-primary text-sm">Back to login</Link>
                        <Button type="submit" color="primary" :loading="form.processing">
                            Email password reset link
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>
