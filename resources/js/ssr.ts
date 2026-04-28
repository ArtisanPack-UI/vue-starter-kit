import { createSSRApp, h, type DefineComponent } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import createServer from '@inertiajs/vue3/server';
import { renderToString } from '@vue/server-renderer';
import { createArtisanPackUI } from '@artisanpack-ui/vue';
import { createArtisanPackUILaravel } from '@artisanpack-ui/vue-laravel';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createServer((page) =>
    createInertiaApp({
        page,
        render: renderToString,
        title: (title) => (title ? `${title} - ${appName}` : appName),
        resolve: (name) => {
            const pages = import.meta.glob<DefineComponent>('./pages/**/*.vue', { eager: true });
            const found = pages[`./pages/${name}.vue`];
            if (!found) {
                throw new Error(`Inertia page not found: ./pages/${name}.vue`);
            }
            return found;
        },
        setup({ App, props, plugin }) {
            return createSSRApp({ render: () => h(App, props) })
                .use(plugin)
                .use(createArtisanPackUI())
                .use(createArtisanPackUILaravel());
        },
    }),
);
