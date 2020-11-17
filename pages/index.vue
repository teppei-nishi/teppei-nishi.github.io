<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline"> Welcome to my page </v-card-title>
        <v-card-text>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi,
            fuga nostrum! Porro totam expedita officia reiciendis nobis
            temporibus accusamus consequatur accusantium, inventore saepe,
            aliquid delectus eligendi libero ex autem rerum.
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo,
  },
}
</script>
