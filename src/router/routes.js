const routes = [
	{
		path: '/',
		name: 'login',
		redirect: '/login',
		meta: {
			keepAlive: true
		},
		children: [
			{
				path: '/login',
				name: 'login',
				meta: {
					keepAlive: true,
					title: '登录'
				},
				component: () => import('@/view/system/login')
			}
		]
	},
	{
		path: '/layout',
		name: 'layout',
		redirect: '/setting',
		component: () => import('@/layout/index'),
		children: [
			{
				path: '/setting',
				name: 'setting',
				meta: {
					keepAlive: true,
					title: '管理'
				},
				component: () => import('@/view/system/setting')
			}
		]
	}
]

export default routes