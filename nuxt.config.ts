// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
    // @ts-ignore
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
    ],
    modules: ['@pinia/nuxt','@pinia-plugin-persistedstate/nuxt',],
    title: 'My Nuxt App',
    
})