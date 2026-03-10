import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import { copyFileSync } from 'fs';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      include: ['src/components'],
      outDir: 'dist',
      rollupTypes: true,
      tsconfigPath: './tsconfig.app.json',
      afterBuild: () => {
        copyFileSync(
          resolve(__dirname, 'src/components/GradientCard/index.css.d.ts'),
          resolve(__dirname, 'dist/index.css.d.ts'),
        );
      },
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/GradientCard/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
    copyPublicDir: false,
  },
});
