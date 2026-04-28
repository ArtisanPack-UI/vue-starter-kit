<script setup lang="ts">
import { computed, ref } from 'vue';
import { Link, router, usePage } from '@inertiajs/vue3';
import { Navbar, Sidebar } from '@artisanpack-ui/vue/navigation';
import { Icon } from '@artisanpack-ui/vue/utility';
import { ToastProvider } from '@artisanpack-ui/vue/feedback';
import { FlashToasts } from '@artisanpack-ui/vue-laravel';
import AppLogo from '@/components/AppLogo.vue';

interface AuthUser {
    name: string;
    email: string;
}

const page = usePage<{ auth: { user: AuthUser | null } }>();
const user = computed(() => page.props.auth.user);
const open = ref(false);
const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';

const NAV = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Settings', href: '/settings/profile' },
];

const MENU_ICON = 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5';
const LOGOUT_ICON =
    'M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75';

function isActive(href: string): boolean {
    if (href === '/dashboard') return currentPath === '/dashboard';
    return currentPath.startsWith(href.replace(/\/profile$/, ''));
}

function logout() {
    router.post('/logout');
}
</script>

<template>
    <ToastProvider>
        <FlashToasts />
        <Sidebar v-model:open="open">
            <div class="min-h-screen flex flex-col bg-base-200">
                <Navbar class="lg:hidden">
                    <template #start>
                        <button
                            type="button"
                            class="btn btn-ghost btn-square"
                            aria-label="Open menu"
                            @click="open = true"
                        >
                            <Icon :path="MENU_ICON" />
                        </button>
                    </template>
                    <template #end>
                        <AppLogo icon-only />
                    </template>
                </Navbar>

                <main class="flex-1">
                    <slot />
                </main>
            </div>

            <template #sidebar>
                <div class="flex flex-col h-full gap-4">
                    <div class="px-2 pt-2">
                        <AppLogo />
                    </div>

                    <ul class="menu menu-md w-full p-0 flex-1">
                        <li v-for="item in NAV" :key="item.href">
                            <Link
                                :href="item.href"
                                :class="isActive(item.href) ? 'menu-active' : ''"
                                @click="open = false"
                            >
                                {{ item.label }}
                            </Link>
                        </li>
                    </ul>

                    <div v-if="user" class="border-t border-base-300 pt-3 px-2">
                        <div class="flex items-center gap-3">
                            <div class="avatar avatar-placeholder">
                                <div class="bg-neutral text-neutral-content rounded-full w-8">
                                    <span class="text-xs">{{
                                        user.name.charAt(0).toUpperCase()
                                    }}</span>
                                </div>
                            </div>
                            <div class="min-w-0 flex-1">
                                <div class="text-sm font-medium truncate">
                                    {{ user.name }}
                                </div>
                                <div class="text-xs text-base-content/60 truncate">
                                    {{ user.email }}
                                </div>
                            </div>
                            <button
                                type="button"
                                class="btn btn-ghost btn-sm btn-square"
                                aria-label="Log out"
                                title="Log out"
                                @click="logout"
                            >
                                <Icon :path="LOGOUT_ICON" size="sm" />
                            </button>
                        </div>
                    </div>
                </div>
            </template>
        </Sidebar>
    </ToastProvider>
</template>
