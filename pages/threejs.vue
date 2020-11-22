<template lang="pug">
div
  h1 Three.js
  v-card.mt-2.card
    .canvas
</template>

<script>
import * as THREE from 'three'

export default {
  mounted() {
    this.init()
    this.animate()
  },
  methods: {
    init() {
      this.camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.01,
        10
      )
      this.camera.position.z = 1
      this.scene = new THREE.Scene()
      this.geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
      this.material = new THREE.MeshNormalMaterial()
      this.mesh = new THREE.Mesh(this.geometry, this.material)
      this.scene.add(this.mesh)
      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      document.querySelector('.canvas').appendChild(this.renderer.domElement)
      this.resizeCanvas()
      window.addEventListener('resize', () => {
        this.resizeCanvas()
      })
    },
    animate() {
      requestAnimationFrame(this.animate)
      this.mesh.rotation.x += 0.01
      this.mesh.rotation.y += 0.02
      this.renderer.render(this.scene, this.camera)
    },
    resizeCanvas() {
      const width = document.querySelector('.canvas').clientWidth
      const height = document.querySelector('.canvas').clientHeight
      this.camera.aspect = width / height
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(width, height)
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
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
