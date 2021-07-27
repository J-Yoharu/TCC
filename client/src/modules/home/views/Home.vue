<template>
  <div>
    <v-row class="background">
      <!-- <v-col
        cols="12"
        class="tw-bg-red-300 d-flex align-end pa-0"
        style="height: 85vh"
      >
        <div style="height: 20%" class="tw-w-full tw-bg-blue-800 wave">a</div>
      </v-col> -->
      <v-col
        cols="12"
        md="4"
        class="d-flex justify-center align-center"
        style="min-height: 300px"
      >
        <Gout />
      </v-col>
      <v-col cols="12" md="4" class="d-flex justify-center align-center">
        <v-card shaped>
          <v-card-title class="justify-center">
            <p>
              Nivel da <span style="color: rgb(65, 105, 225)">àgua</span> do rio
            </p>
          </v-card-title>
          <v-card-text class="text-center display-4">
            {{ porcent }}%
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="4"
        class="d-flex flex-column justify-center align-center"
      >
        <v-icon x-large color="white" v-text="icons.mdiAccessPoint"></v-icon>
        <p class="display-2 text-center white--text">
          Monitorado em tempo real
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="3" class="d-flex justify-center align-center">
        <v-card>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5">
                {{ day.city }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ day.name }}, {{ getDate(day.timestamp) }} 12:30 PM,
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
      </v-col>
      <v-col>
        <v-img
          max-height="350"
          contain
          src="https://www.researchgate.net/profile/Javam-Machado/publication/221535975/figure/fig19/AS:340375819571209@1458163327712/Figura-56-Grafico-de-tempo-de-resposta.png"
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mdiAccessPoint, mdiSend, mdiCloudDownload } from "@mdi/js";
import { getWeather } from "../repositories/weatherRepository";
export default {
  data() {
    return {
      icons: {
        mdiAccessPoint,
        mdiSend,
        mdiCloudDownload
      },
      day: {
        name: "Sabado",
        weather: {},
        wind: {},
        main: {},
        city: "Santo André",
        timestamp: null
      },
      // carousel: 0,
      porcent: 70,
      temperatura: 3
    };
  },
  components: {
    Gout: () => import("../components/Gout.vue")
  },
  computed: {
    cardColor() {
      return this.temperatura < 5 ? "blue" : "red";
    },
    today() {
      return new Date().getDay();
    }
  },
  mounted() {
    let socket = new WebSocket(
      `ws://${process.env.VUE_APP_WEBSOCKET_HOST}:${process.env.VUE_APP_WEBSOCKET_PORT}`
    );
    socket.onmessage = ev => {
      this.porcent = ev.data;
    };
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
  },
  methods: {
    getIcon(name) {
      if (name == null) return;
      return `http://openweathermap.org/img/w/${name}.png`;
    },
    getDate(timestamp) {
      if (timestamp == null) return;
      return new Date(timestamp * 1000).toLocaleDateString("pt-BR");
    }
  }
};
</script>

<style>
.background {
  background-image: linear-gradient(
      to bottom,
      rgba(65, 105, 225, 0.5),
      rgba(0, 128, 128, 0.5)
    ),
    url("../../../assets/bg-rio.jpg");
  background-size: 100% 100%;
  min-height: 50vh;
}
</style>
