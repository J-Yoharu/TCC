<template>
  <v-app>
    <v-main>
      <Menu />
      <v-container fluid style="min-height: 100vh">
        <router-view></router-view>
      </v-container>
      <!-- <Footer /> -->
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "AuthLayout",
  components: {
    Menu: () => import("../components/Menu.vue"),
    // Footer: () => import("../components/Footer.vue")
  }
};
</script>

<style>
</style>