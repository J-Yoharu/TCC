<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-card min-height="100%">
          <v-card-title>
            <p>
              Nivel da <span style="color: rgb(65, 105, 225)">àgua</span> do rio
              -
              <span :class="`${statusWater.color}`">
                {{ statusWater.state }}
              </span>
            </p>
          </v-card-title>

          <v-card-text>
            <div class="d-flex justify-center"><Gout :porcent="porcent" /></div>
            <div>Legenda:</div>
            <div>
              <v-list>
                <v-list-item v-for="(status, index) in statuses" :key="index">
                  <p>
                    {{ status.text }} -
                    <span :class="`${status.color}`">{{ status.state }}</span>
                  </p>
                </v-list-item>
              </v-list>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card min-height="100%">
          <v-card-title>Atividades</v-card-title>
          <v-card-text></v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-row>
          <v-col cols="12">
            <WeatherCard />
          </v-col>
          <v-col cols="12">
            <v-card>
              <v-card-title> Último estado de alerta </v-card-title>
              <v-card-text> 02/03/1997 02:00:00 </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
  <!-- <div>
    <v-row class="background">
      <v-col
        cols="12"
        md="4"
        class="d-flex justify-center align-center"
        style="min-height: 300px"
      >
        <Gout :porcent="porcent" />
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
                {{ weekDays[new Date().getDay()] }},
                {{ getDate(day.timestamp) }},
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
        <RealTimeGraphic />
      </v-col>
    </v-row>
  </div> -->
</template>

<script>
import {
  mdiAccessPoint,
  mdiAlertCircleOutline,
  mdiCloseCircleOutline,
  mdiCheckCircleOutlined
} from "@mdi/js";
export default {
  data() {
    return {
      statuses: [
        {
          text: "Maior que 89%",
          state: "Emergência",
          color: "tw-text-red-700"
        },
        {
          text: "Entre 70 e 88%",
          state: "Alerta",
          color: "tw-text-yellow-400"
        },
        {
          text: "Abaixo de 69%",
          state: "Seguro",
          color: "tw-text-green-600"
        }
      ],
      icons: {
        mdiAccessPoint,
        mdiAlertCircleOutline,
        mdiCloseCircleOutline,
        mdiCheckCircleOutlined
      },

      // carousel: 0,
      porcent: 70,
      socket: null
    };
  },
  components: {
    Gout: () => import("../components/Gout.vue"),
    WeatherCard: () => import("../components/WeatherCard.vue")
    // RealTimeGraphic: () => import("../components/Graphic.vue")
  },
  computed: {
    statusWater() {
      if (this.porcent > 89) return this.statuses[0];
      if (this.porcent > 70 || this.porcent <= 88) return this.statuses[1];
      return this.statuses[2];
    }
  },
  mounted() {
    let hasSocketEnv = Object.keys(process.env).some(env =>
      env.includes("VUE_APP_WEBSOCKET")
    );

    if (!hasSocketEnv) console.error("tem o as variaveis de socket no .env!!!");
    else this.tryConnectOnSocket();
  },
  methods: {
    tryConnectOnSocket() {
      this.socket = new WebSocket(
        `ws://${process.env.VUE_APP_WEBSOCKET_HOST}:${process.env.VUE_APP_WEBSOCKET_PORT}`
      );

      this.socket.onmessage = ev => {
        this.porcent = ev.data;
      };
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
