import { defineConfig } from 'vite';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import htmlPurge from 'vite-plugin-purgecss';

export default defineConfig(
    {
        base: '/',
        appType: 'mpa',
        plugins: [
            htmlPurge({}),
            ViteMinifyPlugin({})
        ]
    }
)
