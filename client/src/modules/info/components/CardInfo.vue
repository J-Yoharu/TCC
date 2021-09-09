<template>
  <v-card>
    <v-card-title>
      {{ card.title }}
    </v-card-title>
    <v-card-text v-html="card.description"> </v-card-text>
    <v-card-actions>
      <v-spacer> </v-spacer>
      <v-btn text>
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
