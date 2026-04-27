<script setup lang="ts">
import { computed } from 'vue';
import { Head, usePage } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';

defineOptions({ layout: AppLayout });

interface AuthUser {
    name: string;
    email: string;
}

const page = usePage<{ auth: { user: AuthUser | null } }>();
const user = computed(() => page.props.auth.user);
</script>

<template>
    <Head title="Dashboard" />
    <div class="p-6 space-y-6 max-w-6xl mx-auto">
        <div>
            <h1 class="text-2xl font-semibold">Dashboard</h1>
            <p class="text-base-content/70 text-sm">
                Welcome back<template v-if="user">, {{ user.name }}</template>.
            </p>
        </div>

        <div class="grid auto-rows-min gap-4 md:grid-cols-3">
            <div v-for="i in 3" :key="i" class="card bg-base-100 shadow aspect-video">
                <div class="card-body items-center justify-center text-base-content/40 text-sm">
                    Placeholder
                </div>
            </div>
        </div>

        <div class="card bg-base-100 shadow min-h-64">
            <div class="card-body items-center justify-center text-base-content/40">
                Main panel placeholder
            </div>
        </div>
    </div>
</template>
