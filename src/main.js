import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import '@/assets/css/reset.scss'
import '@/assets/css/common.scss'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
createApp(App)
	.use(router)
	.use(ElementPlus, {
		locale: zhCn
	})
	.mount('#app')
