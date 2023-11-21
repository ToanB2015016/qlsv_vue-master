


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router';
import axios from 'axios';
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import { Radio, Table, Button } from 'ant-design-vue';

const app = createApp(App)
window.axios = axios;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

app.use(ElementPlus)

app.use(createPinia())
app.use(router)
app.use(Radio);
app.use(Table);
app.use(Button);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app')
