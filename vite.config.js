import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src',
    base: '/peach/',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        assetsDir: 'assets',
        rollupOptions: {
            input: 'src/index.html',
            output: {
                entryFileNames: 'assets/js/[name]-[hash].js',
                chunkFileNames: 'assets/js/[name]-[hash].js',
                assetFileNames: (assetInfo) => {
                    let extType = assetInfo.name.split('.').at(1);
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                        extType = 'img';
                    } else if (/css/i.test(extType)) {
                        extType = 'css';
                    }
                    return `assets/${extType}/[name][extname]`;
                }
            }
        }
    }
});