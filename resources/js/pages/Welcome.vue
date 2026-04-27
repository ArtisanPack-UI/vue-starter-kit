<script setup lang="ts">
import { Head } from '@inertiajs/vue3';

defineProps<{
    laravelVersion: string;
    phpVersion: string;
}>();
</script>

<template>
    <Head title="Welcome" />
    <main class="min-h-screen bg-base-200 flex items-center justify-center p-6">
        <div class="card bg-base-100 shadow-xl max-w-2xl w-full">
            <div class="card-body text-center">
                <h1 class="card-title text-3xl justify-center text-primary">
                    ArtisanPack UI Vue Starter Kit
                </h1>
                <p class="text-base-content/70">
                    Laravel + Inertia.js + Vue 3, ready to build on.
                </p>

                <div class="divider" />

                <div class="grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <div class="text-base-content/60">Laravel</div>
                        <div class="font-mono">{{ laravelVersion }}</div>
                    </div>
                    <div>
                        <div class="text-base-content/60">PHP</div>
                        <div class="font-mono">{{ phpVersion }}</div>
                    </div>
                </div>

                <div class="card-actions justify-center mt-6">
                    <a
                        href="https://github.com/ArtisanPack-UI/vue-starter-kit"
                        class="btn btn-primary"
                    >
                        Documentation
                    </a>
                </div>
            </div>
        </div>
    </main>
</template>
