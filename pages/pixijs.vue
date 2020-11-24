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
    canvas() {
      return document.querySelector('.canvas')
    },
    app() {
      return new PIXI.Application({
        backgroundColor: '0x1099bb',
        // transparent: true,
        resizeTo: this.canvas,
      })
    },
    container() {
      return new PIXI.Container()
    },
  },
  mounted() {
    this.canvas.appendChild(this.app.view)
    this.app.stage.addChild(this.container)
    const texture = PIXI.Texture.from(require('assets/bunny.png'))
    for (let i = 0; i < 100; i++) {
      const bunny = new PIXI.Sprite(texture)
      bunny.anchor.set(0.5)
      bunny.x = (i % 10) * 50
      bunny.y = Math.floor(i / 10) * 50
      bunny.tint = Math.random() * '0xffffff'
      this.container.addChild(bunny)
    }
    this.container.pivot.x = this.container.width / 2
    this.container.pivot.y = this.container.height / 2
    this.app.ticker.add((delta) => {
      this.container.x = this.app.screen.width / 2
      this.container.y = this.app.screen.height / 2
      this.container.rotation -= 0.01 * delta
    })
  },
}
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: 0;
  padding-top: 75%;
}

.canvas {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
