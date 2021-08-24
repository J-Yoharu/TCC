<template>
  <div>
    <v-toolbar class="elevation-0" v-if="!$vuetify.breakpoint.mdAndUp">
      <v-row>
        <v-col cols="12" class="d-flex">
          <v-app-bar-nav-icon
            class="hidden-md-and-up"
            @click.stop="drawer = !drawer"
          >
          </v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <UserProfile type="app" />
        </v-col>
      </v-row>
    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      app
      :width="$vuetify.breakpoint.mdAndUp ? 300 : 250"
      fixed
      left
      :permanent="$vuetify.breakpoint.mdAndUp"
      color="#3F4254"
    >
      <template v-slot:prepend>
        <v-list>
          <v-list-item class="px-2 pb-2">
            <v-list-item-title
              style="color: white"
              class="d-flex justify-center"
            >
              <div>
                <v-img :src="images.floodBrand" class="ml-4" width="300">
                </v-img>
                <h4
                  class="d-flex justify-center pt-2"
                  style="font-weight: bold"
                >
                  TAMANDUATEÍ HOJE
                </h4>
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
        <UserProfile v-if="$vuetify.breakpoint.mdAndUp" />
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
import floodBrand from "@/assets/flood-brand.png";
import { mdiAccount, mdiHome, mdiBookOpenPageVariant, mdiChat } from "@mdi/js";
export default {
  data() {
    return {
      icons: {
        mdiAccount,
        mdiHome,
        mdiBookOpenPageVariant,
        mdiChat,
      },
      images: {
        floodBrand,
      },
      drawer: true,
      mini: false,
      navItems: [
        {
          route: "home",
          icon: "mdiHome",
          name: "Home",
        },
        {
          route: "feed",
          icon: "mdiBookOpenPageVariant",
          name: "Feed",
        },
        {
          route: "chat",
          icon: "mdiChat",
          name: "Chart",
        },
      ],
    };
  },
  components: {
    UserProfile: () => import("@/modules/app/components/UserProfile"),
  },
};
</script>

<style></style>
