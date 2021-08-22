<template>
  <v-avatar>
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
      return "";
    }
  },
  data() {
    return {
      icons: {
        mdiAccount
      }
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