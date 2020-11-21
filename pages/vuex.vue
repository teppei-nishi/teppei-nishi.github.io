<template lang="pug">
div
  h1 Vuex
  .text-center
    | count: {{ count }}
    br
    | modal: {{ modal }}
    br
    | drawer: {{ drawer }}
  .text-center.mt-2
    v-dialog(v-model='modal', width='500', @input='(v) => v || hideModal()')
      template(v-slot:activator='{ on, attrs }')
        v-btn(v-bind='attrs', v-on='on') open modal
      v-card
        v-card-title Modal
        v-card-text.text-center
          | count: {{ count }}
          br
          | modal: {{ modal }}
          br
          | drawer: {{ drawer }}
        v-btn.mt-2(block, @click='increment') increment
        v-btn.mt-2(block, @click='reload') reload
        v-divider
        v-card-actions
          v-spacer
          v-btn(text, @click='hideModal') close
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    count() {
      return this.$store.state.count
    },
    modal: {
      get() {
        return this.$store.state.modal
      },
      set() {
        this.$store.dispatch('showModal')
      },
    },
    drawer() {
      return this.$store.state.drawer
    },
  },
  methods: {
    increment() {
      this.$store.dispatch('increment')
    },
    reload() {
      location.reload()
    },
    hideModal() {
      this.$store.dispatch('hideModal')
    },
  },
}
</script>
