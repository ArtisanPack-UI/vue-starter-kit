# Vue Starter Kit

A Laravel and Vue starter kit featuring [ArtisanPack UI](https://github.com/ArtisanPack-UI) components for rapidly building modern, responsive web applications.

[![Laravel](https://img.shields.io/badge/Laravel-v12.0-FF2D20?style=flat&logo=laravel&logoColor=white)](https://laravel.com)
[![Vue](https://img.shields.io/badge/Vue-v3-4FC08D?style=flat&logo=vue.js&logoColor=white)](https://vuejs.org)
[![Inertia](https://img.shields.io/badge/Inertia.js-v2-9553E9?style=flat&logo=inertia&logoColor=white)](https://inertiajs.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.1-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> **Status: in development.** Tracking via [v1.0.0 umbrella](../../issues/11). The repo currently contains the Phase 0 scaffold; Inertia, Vue pages, and the auth flow land in subsequent phases.

## Features (target for v1.0.0)

- **Modern Stack**: Laravel 12, Inertia.js, Vue v3, Tailwind CSS 4, DaisyUI 5
- **ArtisanPack UI Components**: Pre-built UI components from `@artisanpack-ui/vue`
- **Authentication System**: Login, registration, password reset, email verification (controllers + Form Requests)
- **User Settings**: Profile, password, and appearance management
- **Server-Side Rendering**: Inertia SSR enabled by default
- **Typed Routes**: Laravel Wayfinder for typed route helpers in Vue
- **Responsive + Dark Mode**: Mobile-first, system-preference dark mode via DaisyUI themes
- **Optional Packages**: Choose from additional ArtisanPack UI packages during setup (cms-framework, code-style, code-style-pint, icons, hooks, media-library)
- **Optional Modular Architecture**: `nwidart/laravel-modules` integration

## Requirements

- PHP 8.2+
- Composer
- Node.js + NPM

## Installation

```bash
composer create-project artisanpack-ui/vue-starter-kit your-project-name
```

You'll be prompted for theme colors and any optional ArtisanPack UI packages.

## Development

```bash
composer dev
```

Runs the Laravel server, queue worker, log tailer, Vite dev server, and the Inertia SSR process concurrently.

## Project Structure

- **app/** — Application code (controllers, models, providers)
- **resources/js/** — Vue pages, layouts, and components
- **resources/views/** — Root Blade template (`app.blade.php`) plus auth/email Blade fallbacks
- **resources/css/** — Tailwind entry + ArtisanPack UI theme
- **routes/** — `web.php`, `auth.php`, `console.php`
- **Modules/** — Optional, when modular structure is enabled

## License

MIT — see [LICENSE](LICENSE).

## Credits

- [ArtisanPack UI](https://github.com/ArtisanPack-UI)
- [Laravel](https://laravel.com)
- [Inertia.js](https://inertiajs.com)
- [Vue](https://vuejs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [DaisyUI](https://daisyui.com)
