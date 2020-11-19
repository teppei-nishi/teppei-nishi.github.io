<template lang="pug">
div
  h1 Vuex
  .mt-2 {{ count }}
    v-btn.mt-2(block, @click='increment') increment
    v-btn.mt-2(block, @click='reload') reload
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    count() {
      return this.$store.state.count
    },
  },
  methods: {
    increment() {
      this.$store.dispatch('increment')
    },
    reload() {
      location.reload()
    },
  },
}
</script>
