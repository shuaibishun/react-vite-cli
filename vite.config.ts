import vitePluginForArco from '@arco-plugins/vite-react'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
    plugins: [
        reactRefresh({
            exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
            include: '**/*.tsx'
        }),
        WindiCSS(),
        vitePluginForArco({
            theme: '@arco-design/theme-line'
        })
    ],
    esbuild: {
        jsxInject: `import * as React from 'react';` //自动引入react
    },
    resolve: {
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
    }
})
