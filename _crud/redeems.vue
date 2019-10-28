<template></template>
<script>
  //Component
  import crud from '@imagina/qcrud/_components/crud'

  export default {
    computed: {
      crudData() {
        return {
          apiRoute: 'apiRoutes.qredeems.redeems',
          permission: 'iredeems.redeems',
          create: {
            title: this.$tr('qredeems.layout.newRedeem')
          },
          read: {
            columns: [
              {
                name: 'id', 
                label: this.$tr('ui.form.id'), 
                field: 'id',
                style: 'width: 50px'
              },
              {
                name: 'user', 
                label: this.$tr('ui.label.user'), 
                field: 'user',
                format: val => (val && val.fullName) ? val.fullName : '-'
              },
              {
                name: 'description', 
                label: this.$tr('ui.form.description'), 
                field: 'description', 
                align: 'rigth'
              },
              {
                name: 'points', 
                label: this.$tr('qredeems.layout.form.points'), 
                field: 'points', 
                align: 'rigth'
              },
              {
                name: 'created_at', 
                label: this.$tr('ui.form.createdAt'), 
                field: 'createdAt', 
                align: 'left',
                format: val => val ? this.$trd(val) : '-',
              },
              {
                name: 'actions', 
                label: this.$tr('ui.form.actions'), 
                align: 'left'
              },
            ],
            requestParams: {include: 'user'},
            filters: {
              userId: {
                label: this.$tr('ui.label.user'),
                value: '0',
                type: 'select',
                isRequired: true,
                isTranslatable: false,
                options: [
                  {label: this.$tr('ui.label.all'), id: '0'}
                ],
                loadOptions: {
                  apiRoute: 'apiRoutes.quser.users',
                  select: {label: 'fullName', id: 'id'},
                }
              }
            },
          },
          update: false,
          delete: false,
          formLeft: {
            id: {value: ''},
            userId: {
              label: this.$tr('ui.label.user'),
              value: null,
              type: 'select',
              clearable: true,
              loadOptions: {
                apiRoute: 'apiRoutes.quser.users',
                select: {label: 'fullName', id: 'id'},
              }
            },
            description: {
              label: this.$tr('ui.form.description'),
              value: '',
              type: 'text',
              isRequired: true,
              isTranslatable: false,
            },
            points: {
              label: this.$tr('qredeems.layout.form.points'),
              value: 0,
              type: 'number',
              isRequired: true,
              isTranslatable: false,
            },
            
          },
        }
      }
    },
  }
</script>
