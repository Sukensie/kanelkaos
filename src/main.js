import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import all solid icons from the library */
import { fas } from '@fortawesome/free-solid-svg-icons';

/* add all imported icons to the library */
library.add(fas);

const app = createApp(App);

/* add font awesome icon component to the app */
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app')
