//Layout container
import master from 'src/layouts/master'
import account from 'src/layouts/account'


//Middleware
import auth from '@imagina/quser/_router/middlewares/auth'
import access from '@imagina/quser/_router/middlewares/access'

export default {
	
	userAccount: {
		permission: null,
		activated: true,
		path: '/iredeems/account/points',
		name: 'qredeems.account.points',
		layout: require('@imagina/qredeems/_layouts/frontend/account/index').default,
		containerLayout: account,
		title: 'qredeems.sidebar.adminItems',
		icon: 'apps',
		middleware: [auth,access]
	},
}
