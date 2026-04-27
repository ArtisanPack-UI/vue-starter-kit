import { createApp, h, type DefineComponent } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { createArtisanPackUI } from '@artisanpack-ui/vue';
import { createArtisanPackUILaravel } from '@artisanpack-ui/vue-laravel';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) => {
        const pages = import.meta.glob<DefineComponent>('./pages/**/*.vue');
        const page = pages[`./pages/${name}.vue`];
        if (!page) {
            throw new Error(`Inertia page not found: ./pages/${name}.vue`);
        }
        return page();
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(createArtisanPackUI())
            .use(createArtisanPackUILaravel())
            .mount(el);
    },
    progress: {
        color: 'oklch(var(--p))',
    },
});
