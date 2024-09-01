import { createWebHistory, createRouter } from 'vue-router'

import FormPage from '../pages/FormPage.vue'
import PreviewPage from '../pages/PreviewPage.vue'

const router = createRouter({
	routes : [
		{
			path: '/',
			name: 'main',
			component: FormPage
		},
		{
			path: '/preview',
			name: 'preview',
			component: PreviewPage
		}
	],
	history: createWebHistory(),
})

export default router
