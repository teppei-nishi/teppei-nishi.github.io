<template lang="pug">
v-app(dark)
  v-navigation-drawer(
    v-model='drawer',
    :mini-variant='miniVariant',
    :clipped='clipped',
    fixed,
    app
  )
    v-list
      v-list-item(
        v-for='(item, i) in items',
        :key='i',
        :to='item.to',
        router,
        exact
      )
        v-list-item-action
          v-icon {{ item.icon }}
        v-list-item-content
          v-list-item-title(v-text='item.title')
  v-app-bar(:clipped-left='clipped', fixed, app)
    v-app-bar-nav-icon(@click.stop='drawer = !drawer')
    v-spacer
    v-toolbar-title(v-text='title')
    v-spacer
  v-main
    v-container
      nuxt
  v-navigation-drawer(v-model='rightDrawer', :right='right', temporary, fixed)
    v-list
      v-list-item(@click.native='right = !right')
        v-list-item-action
          v-icon light mdi-repeat
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-lan-connect',
          title: 'axios',
          to: '/axios',
        },
        {
          icon: 'mdi-database',
          title: 'Vuex',
          to: '/vuex',
        },
        {
          icon: 'mdi-cube-outline',
          title: 'Three.js',
          to: '/threejs',
        },
        {
          icon: 'mdi-square-outline',
          title: 'PixiJS',
          to: '/pixijs',
        },
        {
          icon: 'mdi-controller-classic',
          title: 'Phaser',
          to: '/phaser',
        },
        {
          icon: 'mdi-google-controller',
          title: 'Babylon.js',
          to: '/babylonjs',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Nuxt.js + Vuetify.js',
    }
  },
}
</script>
