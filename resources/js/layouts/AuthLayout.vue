<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { ToastProvider } from '@artisanpack-ui/vue/feedback';
import { FlashToasts } from '@artisanpack-ui/vue-laravel';
import AppLogo from '@/components/AppLogo.vue';
</script>

<template>
    <ToastProvider>
        <FlashToasts />
        <main class="min-h-screen bg-base-200 flex flex-col items-center justify-center p-6 gap-6">
            <Link href="/" class="no-underline">
                <AppLogo class-name="text-lg" />
            </Link>
            <div class="w-full max-w-md">
                <slot />
            </div>
        </main>
    </ToastProvider>
</template>
