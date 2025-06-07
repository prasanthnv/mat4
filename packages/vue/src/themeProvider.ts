import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { darkTheme, lightTheme } from './themeBuilder'
// Custom theme

export const MatTheme = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
 theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme,
      darkTheme
    },
  },
 
})