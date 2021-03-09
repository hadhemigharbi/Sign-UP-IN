import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import colors from 'vuetify/lib/util/colors'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md' || 'fa'
    }, 
    theme: {
        themes: {
          light: {
            primary: colors.red.darken1, // #E53935
            secondary: colors.red.lighten4, // #FFCDD2
            accent: colors.indigo.base, // #3F51B5
          },
        },
    },
});
