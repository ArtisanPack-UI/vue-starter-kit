<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import AppLayout from './AppLayout.vue';

const TABS = [
    { href: '/settings/profile', label: 'Profile' },
    { href: '/settings/password', label: 'Password' },
    { href: '/settings/appearance', label: 'Appearance' },
];

const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
</script>

<template>
    <AppLayout>
        <div class="max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-8">
            <aside class="w-full md:w-56 shrink-0">
                <ul class="menu bg-base-100 rounded-box shadow w-full">
                    <li v-for="tab in TABS" :key="tab.href">
                        <Link :href="tab.href" :class="currentPath === tab.href ? 'menu-active' : ''">
                            {{ tab.label }}
                        </Link>
                    </li>
                </ul>
            </aside>
            <section class="flex-1 space-y-6">
                <slot />
            </section>
        </div>
    </AppLayout>
</template>
