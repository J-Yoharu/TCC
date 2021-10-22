<template>
  <v-sheet class="tw-h-full d-flex align-center">
    <v-card width="400" class="tw-m-auto">
      <v-card-title class="d-flex justify-center">
        <div class="wave">
          <v-img :src="logo" class="ml-4" style="z-index: 3" width="280" />
        </div>
      </v-card-title>
      <v-card-text>
        <ValidationObserver v-slot="{ handleSubmit }">
        <v-form class="mt-8" @submit.prevent="handleSubmit(tryLogin)">
            <ValidationProvider rules="required|email" v-slot="{ errors }">
              <v-text-field outlined :error="errors.length != 0" :error-messages="errors[0]" v-model="user.email" label="Email"> </v-text-field>
            </ValidationProvider>
            <ValidationProvider rules="required" v-slot="{ errors }">
              <v-text-field type="password" outlined :error="errors.length != 0" :error-messages="errors[0]" v-model="user.password" label="Senha"> </v-text-field>
            </ValidationProvider>
          <v-btn :loading="loading" block color="#024798" type="submit" dark>Login</v-btn>
          <div v-if="serverError" class="red--text caption text-center mt-3"> {{serverError}} </div>
        </v-form>
        </ValidationObserver>
      </v-card-text>
    </v-card>
  </v-sheet>
</template>

<script>
import logo from "@/assets/flood-brand.png";
import { mapActions } from "vuex"
import { isAuthenticated } from "@/modules/login/services/userService";

export default {
  beforeRouteEnter(to, from, next){
     if(isAuthenticated()){
    next('/')
    }
    next();
  },
  methods:{
    ...mapActions('login', ['login']),

    async tryLogin(){
      this.loading = true;
      let response = await this.login(this.user);
      this.loading = false;
      if(response.status == 200){
        return this.$router.push('/');
      }
      return this.serverError = response;
    }
  },
  data() {
    return {
      logo,
      loading: false,
      serverError:null,
      user:{
        email: null,
        password: null,
      }
    };
  }
};
</script>

<style>
.wave {
  position: relative;
  min-height: 90px;
  width: 100%;
  background: #e0efe3;
}
.wave:before {
  content: "";
  display: block;
  position: absolute;
  border-radius: 100% 50%;
  width: 60%;
  height: 100%;
  background-color: #e0efe3;
  left: 0;
  top: 27px;
}
.wave:after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 100% 40%;
  width: 50%;
  height: 100%;
  background-color: white;
  right: -5px;
  top: 40px;
}
</style>