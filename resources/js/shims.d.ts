/* eslint-disable @typescript-eslint/no-explicit-any */

// @artisanpack-ui/vue advertises subpath types in its package.json
// (e.g. "./form": { "types": "./dist/form.d.ts" }), but as of v1.0.0
// only `index.d.ts` is shipped in the dist. Until the upstream package
// publishes the per-subpath declaration files, declare the named
// exports we use so `vue-tsc --noEmit` doesn't fail with TS7016.

declare module '@artisanpack-ui/vue/form' {
    export const Button: any;
    export const Checkbox: any;
    export const ColorPicker: any;
    export const DatePicker: any;
    export const Editor: any;
    export const FileUpload: any;
    export const Input: any;
    export const Password: any;
    export const Pin: any;
    export const Radio: any;
    export const Range: any;
    export const Select: any;
    export const Textarea: any;
    export const Toggle: any;
}

declare module '@artisanpack-ui/vue/layout' {
    export const Accordion: any;
    export const Card: any;
    export const Collapse: any;
    export const Divider: any;
    export const Drawer: any;
    export const Dropdown: any;
    export const DropdownItem: any;
    export const Grid: any;
    export const Modal: any;
    export const Popover: any;
    export const Stack: any;
    export const Tabs: any;
}

declare module '@artisanpack-ui/vue/navigation' {
    export const Breadcrumbs: any;
    export const Menu: any;
    export const Navbar: any;
    export const Pagination: any;
    export const Sidebar: any;
    export const SpotlightSearch: any;
    export const Steps: any;
}

declare module '@artisanpack-ui/vue/feedback' {
    export const Alert: any;
    export const EmptyState: any;
    export const ErrorDisplay: any;
    export const Loading: any;
    export const Skeleton: any;
    export const ToastMessage: any;
    export const ToastProvider: any;
    export const useToast: any;
}

declare module '@artisanpack-ui/vue/utility' {
    export const Clipboard: any;
    export const Icon: any;
    export const Markdown: any;
    export const ThemeToggle: any;
    export const Tooltip: any;
}

declare module '@artisanpack-ui/vue/data' {
    export const Avatar: any;
    export const Badge: any;
    export const Carousel: any;
    export const Code: any;
    export const Diff: any;
    export const Progress: any;
    export const Sparkline: any;
    export const Stat: any;
    export const Timeline: any;
}

declare module '@artisanpack-ui/vue/display' {
    export const Avatar: any;
    export const Badge: any;
    export const Carousel: any;
    export const Code: any;
    export const Diff: any;
    export const Progress: any;
    export const Sparkline: any;
    export const Stat: any;
    export const Timeline: any;
}

declare module '@artisanpack-ui/vue/composables' {
    export const useAuth: any;
    export const useFlashMessages: any;
}
