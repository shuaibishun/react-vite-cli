import { defineConfig } from 'windicss/helpers'

export default defineConfig({
    darkMode: 'class',
    extract: {
        include: ['src/**/*.{less,css,html,jsx,tsx}'],
        exclude: ['node_modules', '.git']
    }
})
