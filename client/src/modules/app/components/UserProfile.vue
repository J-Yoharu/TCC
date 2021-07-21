<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn rounded large v-bind="attrs" v-on="on">
        <v-avatar small color="primary" class="mr-2"> JA </v-avatar> Jonathas
        <v-icon v-text="icons.mdiChevronDown"></v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item link>
        <v-list-item-content class="d-flex justify-center"
          >Editar conta</v-list-item-content
        >
      </v-list-item>
      <v-list-item link>
        <v-list-item-content class="d-flex justify-center"
          >Editar sair</v-list-item-content
        >
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mdiChevronDown } from "@mdi/js";
export default {
  data() {
    return {
      icons: {
        mdiChevronDown
      }
    };
  }
};
</script>

<style>
</style>