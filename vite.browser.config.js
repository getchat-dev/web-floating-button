import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';
import replace from '@rollup/plugin-replace';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig(async({ command, mode }) => {

    const env = loadEnv(mode, process.cwd(), '');

    const pkg = await import('./package.json');
    const version = pkg.version;

    return {
        appType: 'custom',
        root: './src',
        css: {
            transformer: 'lightningcss'
        },
        build: {
            cssMinify: 'lightningcss',
            outDir: '../dist',
            modulePreload: false,
            lib: {
                entry: resolve(__dirname, 'src/browser.js'),
                name: 'GetChat',
                fileName: 'browser',
                formats: ['es', 'umd', 'iife'],
            },
            assetsInlineLimit: 0
        },
        define: {
            'process.env.SERVER_NAME': JSON.stringify(env.SERVER_NAME),
            'process.env.VERSION': JSON.stringify(version)
        },
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src'),
            },
        },
        plugins: [
            cssInjectedByJsPlugin(),
            replace({
                preventAssignment: true,
                '__JS_GLOBAL_SCOPE__': JSON.stringify(env.JS_SCOPE_NAME),
            })
        ]
    }
})