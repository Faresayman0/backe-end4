import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    server: {
        port: process.env.PORT || 3000,
        host: true,
    },
    build: {
        outDir: 'dist', // تأكد من أن الدليل هنا هو "dist"
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
