<template>
  <v-card>
    <v-card-title>Previsão do tempo</v-card-title>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5">
          {{ day.city }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ weekDays[new Date().getDay()] }}, {{ getDate(day.timestamp) }},
          {{ day.weather.description }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col class="text-h2" cols="6">
          {{ Math.round(day.main.temp) }}&deg;C
        </v-col>
        <v-col cols="6">
          <v-img
            :src="getIcon(day.weather.icon)"
            alt="Sunny image"
            width="92"
          ></v-img>
        </v-col>
      </v-row>
    </v-card-text>

    <v-list-item>
      <v-list-item-icon>
        <v-icon v-text="icons.mdiSend"></v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>23 km/h</v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon v-text="icons.mdiCloudDownload"></v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>48%</v-list-item-subtitle>
    </v-list-item>
  </v-card>
</template>

<script>
import { mdiSend, mdiCloudDownload } from "@mdi/js";
import { getWeather } from "../repositories/weatherRepository";

export default {
  data() {
    return {
      icons: {
        mdiSend,
        mdiCloudDownload
      },
      weekDays: [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado"
      ],
      day: {
        weather: {},
        wind: {},
        main: {},
        city: "Santo André",
        timestamp: null
      }
    };
  },
  computed: {
    today() {
      return new Date().getDay();
    }
  },
  methods: {
    getIcon(name) {
      if (name == null) return;
      return `http://openweathermap.org/img/w/${name}.png`;
    },
    getDate(timestamp) {
      if (timestamp == null) return;
      let date = new Date(timestamp * 1000);
      return `${date.toLocaleDateString("pt-BR")} ${date.getHours()}:
       ${date.getMinutes()}`;
    }
  },
  mounted() {
    getWeather().then(resp => {
      console.log(resp);
      let data = {
        weather: resp.data.weather[0],
        main: resp.data.main,
        wind: resp.data.wind,
        timestamp: resp.data.dt
      };
      Object.assign(this.day, data);
    });
  }
};
</script>

<style>
</style>