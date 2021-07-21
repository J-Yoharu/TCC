<template>
  <v-app>
    <v-main>
      <Menu />
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "AuthLayout",
  components: {
    Menu: () => import("../components/Menu.vue")
  }
};
</script>

<style>
</style>