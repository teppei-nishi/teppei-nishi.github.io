<template lang="pug">
div
  h2 Animated Accordion
  p Click on the buttons to open the collapsible content.
  BaseAccordion(
    v-for='item in accordions',
    :key='item.id',
    :header='item.header'
  )
    .accordion-content {{ item.content }}
</template>

<script>
import BaseAccordion from '~/components/BaseAccordion.vue'

export default {
  components: {
    BaseAccordion,
  },
  data() {
    return {
      accordions: [
        {
          header: 'Section 1',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
          header: 'Section 2',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
          header: 'Section 3',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.accordion-content {
  margin: 1em 0;
}
</style>
