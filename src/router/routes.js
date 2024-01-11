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
					},
					{
						path: '/policy',
						name: 'policy',
						meta: {
							keepAlive: true,
							title: '政策'
						},
						component: () => import('@/view/policy/index')
					},
					{
						path: '/report',
						name: 'report',
						meta: {
							keepAlive: true,
							title: '报告'
						},
						component: () => import('@/view/report/index')
					},
					{
						path: '/price/elasticity',
						name: 'reportElasticity',
						meta: {
							keepAlive: true,
							title: '价格弹性'
						},
						component: () => import('@/view/sandtable/price')
					},
					{
						path: '/scene/simulation',
						name: 'sceneSimulation',
						meta: {
							keepAlive: true,
							title: '场景模拟'
						},
						component: () => import('@/view/sandtable/scene')
					},
					{
						path: '/promotion/optimization',
						name: 'promotionOptimization',
						meta: {
							keepAlive: true,
							title: '促销优化器'
						},
						component: () => import('@/view/sandtable/promotion')
					}
				]
			}
		]
	}
]

export default routes