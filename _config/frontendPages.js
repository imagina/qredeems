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
		authenticated: true
	},
	userPrizes:{
		permission: 'iredeems.redeems.manage',
        activated: true,
        path: '/iredeems/account/myprizes',
       	name: 'qredeems.account.myprizes',
       	page: () => import('src/layouts/qredeems/account/prizes'),
        layout: () => import('src/layouts/master'),
        title: 'Mis premios',
        icon: 'apps',
        authenticated: true
	}
}
