<template></template>
<script>
  //Component
  import crud from '@imagina/qcrud/_components/crud'

  export default {
    computed: {
      crudData() {
        return {
          apiRoute: 'apiRoutes.qredeems.items',
          permission: 'iredeems.items',
          create: {
            title: this.$tr('qredeems.layout.newItem')
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
                name: 'name', 
                label: this.$tr('ui.form.name'), 
                field: 'name', 
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
            requestParams: {include: ''}
          },
          update: {},
          delete: true,
          formLeft: {
            id: {value: ''},
            name: {
                label: this.$tr('ui.form.name'),
                value: '',
                type: 'text',
                isRequired: true,
                isTranslatable: true,
            },
            value: {
              label: this.$tr('qredeems.layout.form.value'),
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
