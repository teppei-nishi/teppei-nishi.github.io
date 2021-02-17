<template lang="pug">
div 
  h1 Intersection Observer API + anime.js
  .target
    .box
    .box
    .box
    .box
    .box
</template>

<script>
import anime from 'animejs/lib/anime.es.js'

export default {
  mounted() {
    this.target = document.querySelector('.target')
    window.addEventListener('load', this.createObserver())
  },
  methods: {
    createObserver() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
      const observer = new IntersectionObserver(this.callback, options)
      observer.observe(this.target)
    },
    callback(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anime({
            targets: '.box',
            translateX: ['-500%', 0],
            opacity: 1,
            easing: 'easeInOutQuad',
            duration: 1000,
            delay: anime.stagger(100),
          })
          observer.unobserve(this.target)
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.target {
  margin-top: 1000px;
}

.box {
  background-color: blue;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  margin: auto;

  & + & {
    margin-top: 10px;
  }
}
</style>
