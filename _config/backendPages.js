//Layout container
import master from 'src/layouts/master'

//Middleware
import auth from '@imagina/quser/_router/middlewares/auth'
import access from '@imagina/quser/_router/middlewares/access'

export default {
  items: {
    permission: 'iredeems.items.manage',
    activated: true,
    path: '/iredeems/items/index',
    name: 'qredeems.admin.items.index',
    layout: require('@imagina/qredeems/_layouts/admin/items/index').default,
    containerLayout: master,
    title: 'qredeems.sidebar.adminItems',
    icon: 'apps',
    middleware: [auth,access]
  },
  redeems: {
    permission: 'iredeems.redeems.manage',
    activated: true,
    path: '/iredeems/redeems/index',
    name: 'qredeems.admin.redeems.index',
    layout: require('@imagina/qredeems/_layouts/admin/redeems/index').default,
    containerLayout: master,
    title: 'qredeems.sidebar.adminRedeems',
    icon: 'transfer_within_a_station',
    middleware: [auth,access]
  },

}
