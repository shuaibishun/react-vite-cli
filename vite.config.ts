import vitePluginForArco from '@arco-plugins/vite-react'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path')

export default defineConfig({
    plugins: [
        reactRefresh({
            exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
            include: '**/*.tsx'
        }),
        WindiCSS(),
        vitePluginForArco({
            // theme: '@arco-design/theme-line'
        })
    ],
    css: {
        preprocessorOptions: {
            //css预处理
            less: {
                modifyVars: {},
                javascriptEnabled: true
            }
        }
    },
    esbuild: {
        jsxInject: `import * as React from 'react';` //自动引入react
    },
    resolve: {
        alias: {
            '@/': `${resolve(__dirname, 'src')}/`,
            '@comp/': `${resolve(__dirname, 'src/components')}/`
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
    }
})
