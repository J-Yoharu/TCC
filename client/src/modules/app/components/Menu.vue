<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      :width="$vuetify.breakpoint.mdAndUp ? 300 : 250"
      fixed
      left
      :permanent="$vuetify.breakpoint.mdAndUp"
      color="#191970"
    >
      <template v-slot:prepend>
        <v-list>
          <v-list-item class="px-2 pb-2">
            <v-list-item-title
              style="color: white"
              class="d-flex justify-center"
            >
              <div>
                <router-link to="/">
                  <v-img :src="images.floodBrand" class="ml-4" width="280">
                  </v-img>
                </router-link>
                <h4
                  class="d-flex justify-center pt-2"
                  style="font-weight: bold"
                ></h4>
              </div>
            </v-list-item-title>
          </v-list-item>
        </v-list>

        <v-divider> </v-divider>

        <v-list two-line nav dense>
          <v-list-item
            v-for="(item, index) in navItems"
            :key="index"
            link
            exact
            :to="{ name: item.route }"
          >
            <v-list-item-icon class="mr-2">
              <v-icon large v-text="icons[item.icon]" style="color: white">
              </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="text-subtitle-1" style="color: white">
                {{ item.name }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>

      <template v-slot:append>
        <UserProfile />
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
import floodBrand from "@/assets/flood-brand.png";
import {
  mdiAccount,
  mdiHome,
  mdiBookOpenPageVariant,
  mdiChat,
  mdiExclamation
} from "@mdi/js";
export default {
  data() {
    return {
      icons: {
        mdiAccount,
        mdiHome,
        mdiBookOpenPageVariant,
        mdiChat,
        mdiExclamation
      },
      images: {
        floodBrand
      },
      drawer: true,
      mini: false,
      navItems: [
        {
          route: "home",
          icon: "mdiHome",
          name: "Home"
        },
        {
          route: "feed",
          icon: "mdiBookOpenPageVariant",
          name: "Feed"
        },
        {
          route: "chat",
          icon: "mdiChat",
          name: "Chat"
        },
        {
          route: "info",
          icon: "mdiExclamation",
          name: "Informações"
        }
      ]
    };
  },
  components: {
    UserProfile: () => import("@/modules/app/components/UserProfile")
  }
};
</script>

<style></style>
