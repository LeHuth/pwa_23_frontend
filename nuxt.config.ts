// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
    // @ts-ignore
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        '@nuxtjs/vuetify', { optionsPath: './vuetify.options.js' }
    ],
    build: {
        transpile: ['vuetify'],
    },
    css: ['vuetify/lib/styles/main.sass', '~/assets/Fonts.css'],
    modules: [
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
    ],
    title: 'My Nuxt App',
    
})