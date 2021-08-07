<template>
  <v-menu transition="scale-transition" :absolute="type != 'app'" offset-x>
    <template v-slot:activator="{ on, attrs }">
      <v-list v-if="type != 'app'">
        <v-list-item
          v-bind="attrs"
          v-on="on"
          class="d-flex justify-center align-center"
        >
          <v-list-item-icon class="ma-2">
            <v-avatar small color="primary" class="mr-2 white--text">
              JA
            </v-avatar>
          </v-list-item-icon>
          <span class="d-flex white--text">
            Jonathas Augusto
            <v-icon color="white" v-text="icons.mdiChevronDown"></v-icon>
          </span>
        </v-list-item>
      </v-list>
      <div v-else>
        <v-avatar
          v-bind="attrs"
          v-on="on"
          small
          color="primary"
          class="mr-2 white--text"
        >
          JA
        </v-avatar>
      </div>
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
  props: {
    type: {
      type: String,
      default() {
        "";
      }
    }
  },
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