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
      <!-- Timeline -->
      <Timeline />
      <v-col cols="12" md="4">
        <v-row no-gutters style="height: 100%">
          <v-col cols="12">
            <WeatherCard />
          </v-col>
          <v-col cols="12">
            <v-card height="100%">
              <v-card-title> Último estado de alerta </v-card-title>
              <v-card-text class="text-center pb-0">
                <div style="font-size: 22px">02/03/1997 02:00:00</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <RealTimeChart :chartData="dataResp" />
      </v-col>
    </v-row>
  </v-container>
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
      dataResp: [
        {
          value: 10,
          text: "15:00"
        },
        {
          value: 20,
          text: "14:00"
        },
        {
          value: 30,
          text: "13:00"
        },
        {
          value: 40,
          text: "12:00"
        },
        {
          value: 50,
          text: "11:00"
        },
        {
          value: 60,
          text: "10:00"
        },
        {
          value: 10,
          text: "09:00"
        }
      ],
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
      porcent: 100,
      socket: null
    };
  },
  components: {
    Gout: () => import("../components/Gout.vue"),
    WeatherCard: () => import("../components/WeatherCard.vue"),
    Timeline: () => import("../components/TimelineFlood.vue"),
    RealTimeChart: () => import("../components/RealTimeChart.vue")
    // RealTimeGraphic: () => import("../components/Graphic.vue")
  },
  computed: {
    statusWater() {
      if (this.porcent > 89) return this.statuses[0];
      if (this.porcent >= 70 && this.porcent <= 88) return this.statuses[1];
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
