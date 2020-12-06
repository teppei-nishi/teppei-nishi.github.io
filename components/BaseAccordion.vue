<template lang="pug">
.accordion
  .header(@click='toggleAccordion') {{ header }}
  .content
    slot
</template>

<script>
export default {
  props: {
    header: { default: '', type: String },
  },
  methods: {
    toggleAccordion(e) {
      const el = e.target
      el.classList.toggle('active')
      const content = el.nextElementSibling
      if (content.style.maxHeight) {
        content.style.maxHeight = null
      } else {
        content.style.maxHeight = content.scrollHeight + 'px'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
  user-select: none;

  &:hover {
    background-color: #ccc;
  }

  &.active {
    background-color: #ccc;
  }
}

.content {
  padding: 0 18px;
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s;
  color: #444;
}
</style>
