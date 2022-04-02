import { createApp } from 'vue'
import 'ant-design-vue/dist/antd.css'
import AntdV from 'ant-design-vue'
import router from './router'

import App from './App.vue'

const app = createApp(App)
app.use(AntdV);
app.use(router);
app.mount('#app');
