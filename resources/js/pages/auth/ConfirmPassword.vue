<script setup lang="ts">
import { Head, useForm } from '@inertiajs/vue3';
import { Button, Input } from '@artisanpack-ui/vue/form';

const form = useForm({ password: '' });

function submit() {
    form.post('/confirm-password', {
        onFinish: () => form.reset('password'),
    });
}
</script>

<template>
    <Head title="Confirm password" />
    <main class="min-h-screen bg-base-200 flex items-center justify-center p-6">
        <div class="card bg-base-100 shadow-xl max-w-md w-full">
            <div class="card-body">
                <h1 class="card-title justify-center">Confirm your password</h1>
                <p class="text-sm text-base-content/70 text-center">
                    This is a secure area. Please confirm your password before continuing.
                </p>

                <form class="flex flex-col gap-4 mt-4" @submit.prevent="submit">
                    <Input
                        v-model="form.password"
                        :error="form.errors.password"
                        label="Password"
                        type="password"
                        autocomplete="current-password"
                        autofocus
                        required
                    />

                    <div class="flex items-center justify-end mt-2">
                        <Button type="submit" color="primary" :loading="form.processing">
                            Confirm
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>
