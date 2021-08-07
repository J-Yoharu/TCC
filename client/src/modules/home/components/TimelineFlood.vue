<template>
  <v-col cols="12" md="4">
    <v-card min-height="100%">
      <v-card-title>Atividades Recentes</v-card-title>
      <v-card-text>
        <v-timeline align-top dense>
          <v-timeline-item
            v-for="(item, index) in activities"
            :key="index"
            :color="item.type"
          >
            <template v-slot:opposite> TASD </template>

            <v-row justify="space-between">
              <v-col cols="7">
                {{ item.text }}
              </v-col>
              <v-col class="text-left" cols="5">
                <strong>
                  {{ item.hour }}
                </strong>
              </v-col>
            </v-row>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import { mdiWaves } from "@mdi/js";
export default {
  data() {
    return {
      icons: {
        mdiWaves
      },
      activities: [
        {
          type: "warning",
          hour: "8:00 pm",
          text: "Alerta"
        },
        {
          type: "red",
          hour: "9:00 pm",
          text: "Emergência"
        },
        {
          type: "success",
          hour: "10:00 pm",
          text: "Seguro"
        },
        {
          type: "red",
          hour: "11:00 pm",
          text: "Emergência"
        },
        {
          type: "success",
          hour: "12:00 pm",
          text: "Seguro"
        },
        {
          type: "red",
          hour: "13:00 am",
          text: "Emergência"
        },
        {
          type: "success",
          hour: "14:00 am",
          text: "Seguro"
        }
      ]
    };
  }
};
</script>

<style>
</style>