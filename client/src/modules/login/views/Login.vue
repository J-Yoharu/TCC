<template>
  <v-sheet class="tw-h-full d-flex align-center">
    <v-card width="400" class="tw-m-auto">
      <v-card-title class="d-flex justify-center">
        <div class="wave">
          a
          <v-img :src="logo" class="ml-4" style="z-index: 3" width="280" />
        </div>
      </v-card-title>
      <v-card-text>
        <v-form class="mt-8">
          <v-text-field outlined label="Email"> </v-text-field>
          <v-text-field outlined label="Senha"> </v-text-field>
          <v-btn block color="#024798" dark>Login</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-sheet>
</template>

<script>
import logo from "@/assets/flood-brand.png";

export default {
  data() {
    return {
      logo
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