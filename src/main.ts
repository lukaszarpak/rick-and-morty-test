/* Base */
import { createApp, h, provide } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';

/* UI components */
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';

/* Styles */
import './assets/scss/main.scss';
import './assets/tailwind.css';

createApp(
  {
    render() {
      return h(App);
    },
  },
)
  .use(PrimeVue)
  .mount('#app');
