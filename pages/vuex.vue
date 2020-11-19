<template lang="pug">
div
  h1 Vuex
  div {{ count }}
    v-btn(block, @click='increment') increment
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
  },
}
</script>
