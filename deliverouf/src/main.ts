import { createApp } from 'vue'
import App from './App.vue'
import "./style.css"
import router from './router'
import store from './store'
import Vue from 'vue'

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { loadFonts } from './plugins/webfontloader'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faHouse, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

loadFonts()

library.add(faUser, faHouse, faCartShopping, faMagnifyingGlass, faGithub, faFacebook, faInstagram, faTwitter)


const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
  })


createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).use(vuetify).mount('#app')