<template>
  <v-avatar :color="randomColor">
    <v-img v-if="user.avatar" :src="user.avatar"></v-img>
    <span v-else-if="initials"> {{ initials }} </span>
    <v-icon v-text="icons.mdiAccount" v-else></v-icon>
  </v-avatar>
</template>

<script>
import { mdiAccount } from "@mdi/js";
export default {
  computed: {
    initials() {
      let splitedName = this.user.name.split(" ");
      return splitedName.map(name => name[0]).join("");
    },
    randomColor() {
      let colors = this.colors;
      let index = Math.floor(Math.random() * (colors.length - 1 - 0)) + 0;
      return colors[index];
    }
  },
  data() {
    return {
      icons: {
        mdiAccount
      },
      colors: [
        "primary",
        "accent",
        "warning lighten-2",
        "teal",
        "grey lighten-2"
      ]
    };
  },

  props: {
    user: {
      type: Object,
      require: true
    }
  }
};
</script>

<style>
</style>