export default {
	
	userAccount: {
		permission: null,
		activated: true,
		path: '/iredeems/account/points',
		name: 'qredeems.account.points',
		page: () => import('@imagina/qredeems/_layouts/frontend/account/index'),
		layout: () => import('src/layouts/master'),
		title: 'qredeems.sidebar.adminItems',
		icon: 'apps',
		authenticated: false
	},
}
