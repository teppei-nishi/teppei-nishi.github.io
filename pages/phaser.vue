<template lang="pug">
div
  h1 Phaser
  v-card.card.mt-2
    #parent
</template>

<script>
import Phaser from 'phaser'

export default {
  data() {
    return {
      config: {
        parent: 'parent',
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
          default: 'arcade',
          arcade: {
            gravity: { y: 200 },
          },
        },
        scale: {
          mode: Phaser.Scale.FIT,
          autoCenter: Phaser.Scale.CENTER_BOTH,
        },
        scene: {
          preload() {
            this.load.image('sky', require('assets/skies/space3.png'))
            this.load.image('logo', require('assets/sprites/phaser3-logo.png'))
            this.load.image('red', require('assets/particles/red.png'))
          },
          create() {
            this.add.image(400, 300, 'sky')
            const particles = this.add.particles('red')
            const emitter = particles.createEmitter({
              speed: 100,
              scale: { start: 1, end: 0 },
              blendMode: 'ADD',
            })
            const logo = this.physics.add.image(400, 100, 'logo')
            logo.setVelocity(100, 200)
            logo.setBounce(1, 1)
            logo.setCollideWorldBounds(true)
            emitter.startFollow(logo)
          },
        },
      },
    }
  },
  mounted() {
    // eslint-disable-next-line no-new
    new Phaser.Game(this.config)
  },
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 75%;
}

#parent {
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: 0;
  line-height: 0;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
