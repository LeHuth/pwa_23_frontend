// plugins/vuetify.js
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import {aliases, mdi} from 'vuetify/iconsets/mdi'
import {fa} from 'vuetify/iconsets/fa'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: true,
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: {
                mdi,
                fa
            },
        },
        components,
        directives,
    })

    nuxtApp.vueApp.use(vuetify)
})
