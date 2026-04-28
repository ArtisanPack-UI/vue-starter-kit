<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Head } from '@inertiajs/vue3';
import SettingsLayout from '@/layouts/SettingsLayout.vue';

defineOptions({ layout: SettingsLayout });

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

const mode = ref<Mode>('system');

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
                    v-for="m in ['light', 'dark', 'system'] as Mode[]"
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
</template>
