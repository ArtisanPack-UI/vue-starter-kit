<script setup lang="ts">
import { computed } from 'vue';
import { usePage } from '@inertiajs/vue3';

withDefaults(defineProps<{ className?: string; iconOnly?: boolean }>(), {
    iconOnly: false,
});

const page = usePage<{ name: string }>();
const name = computed(() => page.props.name);
</script>

<template>
    <span class="inline-flex items-center gap-2" :class="className">
        <span
            class="inline-flex items-center justify-center rounded-md bg-primary text-primary-content font-bold size-8 text-sm"
            aria-hidden="true"
        >
            AP
        </span>
        <span v-if="!iconOnly" class="font-semibold">{{ name }}</span>
    </span>
</template>
