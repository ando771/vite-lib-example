import { resolve } from 'path';
import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        dts(),
        react({
            jsxRuntime: "classic"
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            fileName: 'index',
            formats: ['es', 'cjs']
        },
        rollupOptions: {
            external: ['react', 'react-dom']
        }
    }
});