<template>
  <v-col cols="12" md="4">
    <v-card min-height="100%">
      <v-card-title>Atividades Recentes</v-card-title>
      <v-card-text>
        <v-timeline align-top dense>
          <v-timeline-item
            v-for="(item, index) in riverData"
            :color="setColor(item.status)"
            :key="index"
          >
            <template v-slot:opposite> TASD </template>

            <v-row justify="space-between">
              <v-col cols="7">
                {{ item.status }}
              </v-col>
              <v-col class="text-left" cols="5">
                <strong>
                  {{ moment(item.time * 1000).format("HH:mm:ss") }}
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
  props: {
    riverData: {
      type: Array,
      required: true
    }
  },
  methods: {
    setColor(status) {
      let color = "tw-text-red-700";
      switch (status) {
        case "Emergência":
          color = "red";
          break;
        case "Alerta":
          color = "warning";
          break;
        case "Seguro":
          color = "success";
          break;
      }
      return color;
    }
  },
  data() {
    return {
      icons: {
        mdiWaves
      }
    };
  }
};
</script>

<style>
</style>