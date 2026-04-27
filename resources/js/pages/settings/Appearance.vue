<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Head, Link } from '@inertiajs/vue3';

type Mode = 'light' | 'dark' | 'system';

const STORAGE_KEY = 'theme';

function applyTheme(mode: Mode) {
    const resolved =
        mode === 'system'
            ? window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
            : mode;
    document.documentElement.setAttribute('data-theme', resolved);
}

const NAV = [
    { href: '/settings/profile', label: 'Profile' },
    { href: '/settings/password', label: 'Password' },
    { href: '/settings/appearance', label: 'Appearance' },
];

const mode = ref<Mode>('system');
const url = typeof window !== 'undefined' ? window.location.pathname : '/settings/appearance';

onMounted(() => {
    const saved = (localStorage.getItem(STORAGE_KEY) as Mode | null) ?? 'system';
    mode.value = saved;
    applyTheme(saved);
});

function pick(next: Mode) {
    mode.value = next;
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
}
</script>

<template>
    <Head title="Appearance" />
    <main class="min-h-screen bg-base-200 p-6">
        <div class="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
            <aside class="w-full md:w-56 shrink-0">
                <ul class="menu bg-base-100 rounded-box shadow w-full">
                    <li v-for="item in NAV" :key="item.href">
                        <Link :href="item.href" :class="url === item.href ? 'menu-active' : ''">
                            {{ item.label }}
                        </Link>
                    </li>
                </ul>
            </aside>

            <section class="flex-1 space-y-6">
                <div>
                    <h1 class="text-2xl font-semibold">Appearance</h1>
                    <p class="text-base-content/70 text-sm">
                        Choose how the app looks to you. Saved on this device only.
                    </p>
                </div>

                <div class="card bg-base-100 shadow">
                    <div class="card-body">
                        <div class="join">
                            <button
                                v-for="m in (['light', 'dark', 'system'] as Mode[])"
                                :key="m"
                                type="button"
                                class="btn join-item capitalize"
                                :class="mode === m ? 'btn-primary' : ''"
                                @click="pick(m)"
                            >
                                {{ m }}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>
