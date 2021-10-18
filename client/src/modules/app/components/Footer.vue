<template>
  <v-footer  bottom padless>
     <v-card
      flat
      tile
      width="100%"
      class="indigo lighten-3 white--text text-center"
    >
      <v-card-text > 
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
       <p>Projeto para monitoramento do Rio tamandutei</p>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>UNIP Anchieta</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {};
</script>

<style>
</style>