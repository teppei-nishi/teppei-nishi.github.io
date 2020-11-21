<template lang="pug">
div
  h1 Phaser
  v-card.mt-2.canvas
</template>

<script>
import * as PIXI from 'pixi.js'

export default {
  data() {
    return {
      app: null,
      bunny: null,
    }
  },
  computed: {
    canvas() {
      return document.querySelector('.canvas')
    },
  },
  mounted() {
    this.app = new PIXI.Application()
    this.canvas.appendChild(this.app.view)
    this.app.loader
      .add('bunny', require('assets/bunny.png'))
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .load((loader, resources) => {
        this.bunny = new PIXI.Sprite(resources.bunny.texture)
        this.bunny.anchor.x = 0.5
        this.bunny.anchor.y = 0.5
        this.app.stage.addChild(this.bunny)
        this.app.ticker.add(() => {
          this.bunny.rotation += 0.01
          this.bunny.position.set(
            this.app.renderer.width / 2,
            this.app.renderer.height / 2
          )
        })
      })
    this.resize()
    window.addEventListener('resize', () => {
      this.resize()
    })
  },
  methods: {
    resize() {
      this.app.renderer.resize(
        this.canvas.clientWidth,
        this.canvas.clientHeight
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.canvas {
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  line-height: 0;
}
</style>
