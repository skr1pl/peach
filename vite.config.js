import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    root: 'src',
    base: '/peach-project/',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html')
            }
        }
    },
    server: {
        open: true,
        port: 3000
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @import "./src/styles/utils/_variables.scss";
                    @import "./src/styles/utils/_mixins.scss";
                `
            }
        }
    }
}); 