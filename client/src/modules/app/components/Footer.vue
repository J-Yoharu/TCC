<template>
  <v-footer padless>
    <v-col class="text-center pa-0" cols="12">
      <v-btn color="black" text rounded class="my-2"> Home </v-btn>
      <v-btn color="black" text rounded class="my-2"> Contato </v-btn>
      <v-btn color="black" text rounded class="my-2"> Quem somos </v-btn>
    </v-col>
    <v-col class="text-center pa-0" cols="12">
      {{ new Date().getFullYear() }} —
      <strong>TCC - Ciências da computação</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {};
</script>

<style>
</style>