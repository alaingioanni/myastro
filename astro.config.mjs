import { defineConfig } from 'astro/config';

export default defineConfig({
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'fr'],
        routing: {
            prefixDefaultLocale: true // Make sure this is true if you want /en/blog
        }
    },
    // Add your root redirect here
    redirects: {
        '/': '/blog/en'
    }
});