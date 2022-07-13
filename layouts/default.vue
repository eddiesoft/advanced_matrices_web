<template>
  <v-app>
    <v-app-bar app elevation="5">
      <v-img :src="require('~/images/logo.png')" class="mr-4" max-height="40" max-width="40" contain
        @click="clickLogo()"></v-img>
      <v-toolbar-title>Raven's Advanced Progressive Matrices</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'DefaultLayout',
      ...mapActions({
      clearAppCorWrongLists: 'test/clearAppCorWrongLists',
      clearAnswersList: 'test/clearAnswersList',
    }),
  methods: {
    clickLogo() {
      this.clearAnswersList();
      this.clearAppCorWrongLists();
      this.$router.push('/');
    }
  }
}
</script>

<style lang="scss">
</style>
