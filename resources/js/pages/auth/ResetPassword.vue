<script setup lang="ts">
import { Head, useForm } from '@inertiajs/vue3';
import { Button, Input } from '@artisanpack-ui/vue/form';

const props = defineProps<{
    token: string;
    email: string;
}>();

const form = useForm({
    token: props.token,
    email: props.email,
    password: '',
    password_confirmation: '',
});

function submit() {
    form.post('/reset-password', {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
}
</script>

<template>
    <Head title="Reset password" />
    <main class="min-h-screen bg-base-200 flex items-center justify-center p-6">
        <div class="card bg-base-100 shadow-xl max-w-md w-full">
            <div class="card-body">
                <h1 class="card-title justify-center">Reset your password</h1>

                <form class="flex flex-col gap-4 mt-4" @submit.prevent="submit">
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
                        label="New password"
                        type="password"
                        autocomplete="new-password"
                        autofocus
                        required
                    />
                    <Input
                        v-model="form.password_confirmation"
                        :error="form.errors.password_confirmation"
                        label="Confirm new password"
                        type="password"
                        autocomplete="new-password"
                        required
                    />

                    <div class="flex items-center justify-end mt-2">
                        <Button type="submit" color="primary" :loading="form.processing">
                            Reset password
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>
