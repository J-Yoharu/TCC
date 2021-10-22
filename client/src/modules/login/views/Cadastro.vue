<template>
  <v-sheet class="tw-h-full d-flex align-center">
    <v-card :loading="loading" width="450" class="tw-m-auto">
      <v-card-title class="d-flex justify-center">
        <div class="wave">
          <v-img :src="logo" class="ml-4" style="z-index: 3" width="280" />
        </div>
      </v-card-title>
      <v-card-text>
        <ValidationObserver v-slot="{ handleSubmit }">
          <v-form class="mt-8" @submit.prevent="handleSubmit(save)">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <v-text-field
                outlined
                hide-details="auto"
                :error="errors.length != 0"
                :error-messages="errors[0]"
                class="mt-3"
                v-model="user.firstName"
                label="Primeiro nome"
              >
              </v-text-field>
            </ValidationProvider>

            <ValidationProvider rules="required" v-slot="{ errors }">
              <v-text-field
                outlined
                :error="errors.length != 0"
                :error-messages="errors[0]"
                hide-details="auto"
                class="mt-3"
                v-model="user.lastName"
                label="Sobrenome"
              >
              </v-text-field>
            </ValidationProvider>

            <ValidationProvider rules="required|email" v-slot="{ errors }">
              <v-text-field
                outlined
                :error="errors.length != 0"
                :error-messages="errors[0]"
                hide-details="auto"
                class="mt-3"
                v-model="user.email"
                label="Email"
              >
              </v-text-field>
            </ValidationProvider>

            <ValidationProvider
              name="Senha"
              rules="required|min:5"
              vid="password"
              v-slot="{ errors }"
            >
              <v-text-field
                outlined
                :error="errors.length != 0"
                :error-messages="errors[0]"
                hide-details="auto"
                type="password"
                class="mt-3"
                v-model="user.password"
                label="Senha"
              >
              </v-text-field>
            </ValidationProvider>

            <ValidationProvider
              name="Confirmação de senha"
              rules="required|confirmed:password|min:5"
              vid="confirm"
              v-slot="{ errors }"
            >
              <v-text-field
                outlined
                :error="errors.length != 0"
                :error-messages="errors[0]"
                hide-details="auto"
                type="password"
                class="mt-3"
                v-model="user.confirmPassword"
                label="Confirme a senha"
              >
              </v-text-field>
            </ValidationProvider>

            <ValidationProvider rules="required" v-slot="{ errors }">
              <v-autocomplete
                :error="errors.length != 0"
                :error-messages="errors[0]"
                :items="cities"
                item-text="nome"
                item-value="nome"
                outlined
                hide-details="auto"
                class="mt-3"
                v-model="user.region"
                label="Selecione uma região de São Paulo"
              >
              </v-autocomplete>
            </ValidationProvider>

            <v-btn class="mt-5" type="submit" block color="#024798" dark
              >Cadastrar</v-btn
            >
            <div class="caption text-center red--text mt-2" v-if="serverError">{{serverError}}</div>
          </v-form>
        </ValidationObserver>
      </v-card-text>
    </v-card>
  </v-sheet>
</template>

<script>
import logo from "@/assets/flood-brand.png";
import {
  createUser,
  getRegions
} from "@/modules/login/repositories/userRepository";
export default {
  created() {
    getRegions().then(resp => {
      this.cities = resp.data;
    });
  },

  data() {
    return {
      logo,
      user: {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        confirmPassword: null,
        region: null
      },
      cities: [],
      loading: false,
      serverError: null,
    };
  },
  methods: {
    save() {
      this.loading = true;
      createUser(this.user).then((resp) => {
          this.$router.push({'name': 'login'})
          console.log(resp);
      }).catch((err)=>{
          this.serverError = err;
          console.log(err)
      }).finally(()=> this.loading = false);
    }
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