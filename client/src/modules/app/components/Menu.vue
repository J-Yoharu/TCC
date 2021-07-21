<template>
  <v-app-bar elevation="2">
    <v-img
      contain
      height="100%"
      src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
    ></v-img>

    <v-tabs>
      <v-tab
        @click="$router.push({ name: tab.route })"
        v-for="tab in tabs"
        :key="tab.name"
      >
        <v-icon v-text="tab.icon" class="mr-5"></v-icon> {{ tab.name }}</v-tab
      >
    </v-tabs>
    <v-row style="width: 50rem">
      <v-col cols="12">
        <v-text-field
          hide-details
          label="Pesquisar post"
          outlined
          rounded
          single-line
          dense
          class="mr-5"
        />
      </v-col>
    </v-row>
    <div>
      <UserProfile />
    </div>
  </v-app-bar>
</template>

<script>
import { mdiHome, mdiBookOpenPageVariant, mdiChat } from "@mdi/js";
export default {
  data() {
    return {
      icons: {},
      tabs: [
        {
          name: "Home",
          icon: mdiHome,
          route: "home"
        },
        {
          name: "Feed",
          icon: mdiBookOpenPageVariant,
          route: "feed"
        },
        {
          name: "Chat",
          icon: mdiChat,
          route: "chat"
        }
      ]
    };
  },
  components: {
    UserProfile: () => import("./UserProfile.vue")
  }
};
</script>

<style>
</style>