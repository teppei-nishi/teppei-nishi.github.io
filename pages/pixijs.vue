<template lang="pug">
div
  h1 PixiJS
  v-card.mt-2.card
    .canvas
</template>

<script>
import * as PIXI from 'pixi.js'

export default {
  computed: {
    app() {
      return new PIXI.Application()
    },
    canvas() {
      return document.querySelector('.canvas')
    },
  },
  mounted() {
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
.card {
  width: 100%;
  height: 0;
  padding-top: 56.25%;
}

.canvas {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
