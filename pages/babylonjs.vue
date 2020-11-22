<template lang="pug">
div
  h1 Babylon.js
  v-card.mt-2.card
    canvas#renderCanvas
</template>

<script>
import * as BABYLON from 'babylonjs'

export default {
  data() {
    return {
      engine: null,
      scene: null,
    }
  },
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
    this.scene = this.createScene()
    this.engine.runRenderLoop(() => {
      this.scene.render()
    })
    window.addEventListener('resize', () => {
      this.engine.resize()
    })
  },
  methods: {
    createScene() {
      const scene = new BABYLON.Scene(this.engine)
      const camera = new BABYLON.FreeCamera(
        'camera1',
        new BABYLON.Vector3(0, 5, -10),
        scene
      )
      camera.setTarget(BABYLON.Vector3.Zero())
      camera.attachControl(this.canvas, false)
      // eslint-disable-next-line no-new
      new BABYLON.HemisphericLight(
        'light1',
        new BABYLON.Vector3(0, 1, 0),
        scene
      )
      const sphere = BABYLON.Mesh.CreateSphere(
        'sphere1',
        16,
        2,
        scene,
        false,
        BABYLON.Mesh.FRONTSIDE
      )
      sphere.position.y = 1
      BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene, false)
      return scene
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
