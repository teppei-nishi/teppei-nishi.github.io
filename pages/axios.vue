<template lang="pug">
div
  h1 axios
  p
    | get from
    |
    a(href='https://randomfox.ca/floof/', target='_blank')
      | https://randomfox.ca/floof/
  v-card
    v-toolbar.d-flex.justify-end
      v-btn(icon, large, @click='getRandomFox')
        v-icon(large) mdi-cached
    a(:href='randomFox.link', target='_blank')
      v-img(:src='randomFox.image', contain)
</template>

<script>
export default {
  data() {
    return {
      randomFox: {},
    }
  },
  mounted() {
    this.getRandomFox()
  },
  methods: {
    async getRandomFox() {
      try {
        this.randomFox = await this.$axios.$get('https://randomfox.ca/floof/')
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    },
  },
}
</script>
