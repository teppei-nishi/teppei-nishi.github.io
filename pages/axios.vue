<template lang="pug">
div
  h1 axios
  p
    | get from
    |
    a(href='https://shibe.online/', target='_blank')
      | https://shibe.online/
  ul.list
    li(v-for='image in images')
      img(:src='image')
</template>

<script>
export default {
  data() {
    return {
      images: [],
    }
  },
  async mounted() {
    try {
      this.images = await this.$axios.$get('/api/api/shibes', {
        params: {
          count: 10,
          urls: true,
          httpsUrls: true,
        },
      })
    } catch (error) {}
  },
}
</script>

<style lang="scss" scoped>
.list {
  list-style-type: none;
  display: flex;
  padding: 0;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  li {
    img {
      max-width: 100%;
    }
  }
}
</style>
