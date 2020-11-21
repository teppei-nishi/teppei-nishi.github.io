<template lang="pug">
div
  h1 PixiJS
  v-card.mt-2.canvas
</template>

<script>
import * as PIXI from 'pixi.js'

export default {
  data() {
    return {}
  },
  mounted() {
    const app = new PIXI.Application()
    document.querySelector('.canvas').appendChild(app.view)
    app.loader
      .add('bunny', require('assets/bunny.png'))
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .load((loader, resources) => {
        const bunny = new PIXI.Sprite(resources.bunny.texture)
        bunny.x = app.renderer.width / 2
        bunny.y = app.renderer.height / 2
        bunny.anchor.x = 0.5
        bunny.anchor.y = 0.5
        app.stage.addChild(bunny)
        app.ticker.add(() => {
          bunny.rotation += 0.01
        })
      })
  },
  methods: {},
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
