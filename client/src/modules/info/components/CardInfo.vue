<template>
  <v-card height="100%">
    <v-card-title>
      <v-row>
        <v-col cols="12"
          ><div class="d-flex justify-center tw-w-100">
            <v-img
              contain
              :src="card.img"
              max-width="350"
              position="center center"
            ></v-img></div
        ></v-col>
        <v-col cols="12"> {{ card.title }}</v-col>
      </v-row>
    </v-card-title>
    <v-card-text v-html="card.description"> </v-card-text>
    <v-card-actions>
      <v-spacer> </v-spacer>
      <v-btn text href="/">
        Saiba mais
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    card: {
      required: true,
    },
  },
};
</script>

<style></style>
