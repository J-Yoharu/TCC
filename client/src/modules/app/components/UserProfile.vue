<template>
  <div>
    <v-list>
      <v-list-item class="d-flex justify-center align-center">
        <v-list-item-icon class="ma-2">
          <v-avatar small color="primary" v-if="user.photo" class="mr-2">
            <v-img :src="user.photo" />
          </v-avatar>
          <v-avatar small color="primary" v-else class="mr-2 white--text">
            {{ user.initials }}
          </v-avatar>
        </v-list-item-icon>
        <span class="d-flex white--text"> {{ user.firstName }} {{user.lastName}} </span>
        <v-menu transition="scale-transition" offset-x>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon color="white" v-text="icons.mdiChevronDown"></v-icon>
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
                >sair</v-list-item-content
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { mdiChevronDown } from "@mdi/js";
import { mapGetters } from 'vuex';
export default {
  computed:{
    ...mapGetters('login', ['user']),
  },
  data() {
    return {
      icons: {
        mdiChevronDown
      },
     
    };
  }
};
</script>

<style>
</style>