<template lang="pug">
div
  h1 Babylon.js
  v-card.mt-2.card
    canvas#renderCanvas
</template>

<script>
import * as BABYLON from 'babylonjs'

export default {
  computed: {
    canvas() {
      return document.getElementById('renderCanvas')
    },
  },
  mounted() {
    this.engine = new BABYLON.Engine(this.canvas, true, {
      preserveDrawingBuffer: true,
      stencil: true,
    })
    const scene = this.createScene()
    this.engine.runRenderLoop(() => {
      scene.render()
    })
    window.addEventListener('resize', () => {
      this.engine.resize()
    })
  },
  methods: {
    createScene() {
      const scene = new BABYLON.Scene(this.engine)
      this.createCamera()
      this.createLight()
      this.createSphere()
      this.createGround()
      return scene
    },
    createCamera() {
      const camera = new BABYLON.ArcRotateCamera(
        'Camera',
        0,
        1,
        10,
        new BABYLON.Vector3(0, 0, 0),
        this.scene
      )
      camera.attachControl(this.canvas, false)
    },
    createLight() {
      // eslint-disable-next-line no-new
      new BABYLON.HemisphericLight(
        'light1',
        new BABYLON.Vector3(0, 1, 0),
        this.scene
      )
    },
    createSphere() {
      const sphere = BABYLON.Mesh.CreateSphere(
        'sphere1',
        16,
        2,
        this.scene,
        false,
        BABYLON.Mesh.FRONTSIDE
      )
      sphere.position.y = 1
    },
    createGround() {
      BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, this.scene, false)
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: 0;
  padding-top: 56.25%;
  position: relative;
}

#renderCanvas {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  outline: none;
}
</style>
