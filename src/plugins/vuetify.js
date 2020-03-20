import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

const opts = {
  theme: {
    themes: {
      light: {
        primary: colors.green.darken1,
        secondary: colors.grey.darken1,
        accent: colors.green.accent1,
        error: colors.red.accent3,
      },
      dark: {
        primary: colors.green.lighten3,
      },
    },
  },
}

export default new Vuetify(opts)
