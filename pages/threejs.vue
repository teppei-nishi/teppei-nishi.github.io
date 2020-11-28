<template lang="pug">
div
  h1 Three.js
  v-card.mt-2.card
    .canvas
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default {
  computed: {
    canvas() {
      return document.querySelector('.canvas')
    },
  },
  mounted() {
    this.init()
    this.animate()
  },
  methods: {
    init() {
      this.scene = new THREE.Scene()
      this.geometry = new THREE.BoxGeometry(1, 1, 1)
      this.material = new THREE.MeshNormalMaterial()
      this.mesh = new THREE.Mesh(this.geometry, this.material)
      this.scene.add(this.mesh)
      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.createCamera()
      this.canvas.appendChild(this.renderer.domElement)
      this.renderer.domElement.style.outline = 'none'
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
      const width = this.canvas.clientWidth
      const height = this.canvas.clientHeight
      this.camera.aspect = width / height
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(width, height)
    },
    createCamera() {
      this.camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.01,
        10
      )
      this.camera.position.z = 5
      const controls = new OrbitControls(this.camera, this.renderer.domElement)
      controls.enablePan = false
      controls.minDistance = 1
      controls.maxDistance = 10
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
