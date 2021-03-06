<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-card min-height="100%">
          <v-card-title>
            <p>
              Nível da <span style="color: rgb(65, 105, 225)">água</span> do rio
              -
              <br />
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
      <Timeline :riverData="[...riverData].reverse().slice(0, 7)" />
      <v-col cols="12" md="4">
        <v-row no-gutters style="height: 100%">
          <v-col cols="12">
            <WeatherCard />
          </v-col>
          <v-col cols="12">
            <v-card height="100%">
              <v-card-title>
                <p>
                  Último estado de
                  <span class="tw-text-red-700"> emergência</span>
                </p>
              </v-card-title>
              <v-card-text class="text-center pb-0">
                <div style="font-size: 22px">
                  {{
                    lastEmergency.time
                      ? moment(lastEmergency.time * 1000).format(
                          "DD/MM/YYYY HH:mm:ss"
                        )
                      : ""
                  }}
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <RealTimeChart
          :key="riverData.length"
          :chartData="[...riverData].slice(0, 100)"
        />
      </v-col>
    </v-row>
    <!-- <v-data-table :items="riverData" :headers="header">
      <template v-slot:[`item.porcent`]="{ item }">
        {{ item.porcent }} %
      </template>
      <template v-slot:[`item.time`]="{ item }">
        {{ moment(item.time * 1000).format("DD/MM/YYYY HH:mm") }}
      </template>
    </v-data-table> -->
  </v-container>
</template>

<script>
import {
  mdiAccessPoint,
  mdiAlertCircleOutline,
  mdiCloseCircleOutline,
  mdiCheckCircleOutlined
} from "@mdi/js";
import { riverListener } from "@/modules/home/repositories/riverRealTimeRepository";

export default {
  data() {
    return {
      header: [
        { text: "Porcentagem", value: "porcent" },
        { text: "Status", value: "status" },
        {
          text: "Timestamp",
          value: "time"
        }
      ],
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
      lastEmergency: {},
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
      riverData: [],
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
        console.log(ev.data);
        this.porcent = ev.data;
      };
    },
    formatData(data) {
      let arr = [];
      Object.keys(data).forEach(index => {
        data[index] != "" ? arr.push(data[index]) : false;
      });
      return arr;
    }
  },
  created() {
    let now = this.moment();
    riverListener()
      .orderByChild("time")
      .startAt(Math.floor(now.startOf("day").valueOf() / 1000))
      .endAt(now.endOf("day").valueOf() / 1000)
      .once(
        "value",
        res => {
          this.riverData = this.formatData(res.val());
        },
        errorObject => {
          console.log("falhou na leitura: " + errorObject.name);
        }
      );

    riverListener()
      .orderByChild("porcent")
      .startAt(89)
      .limitToLast(1)
      .once("value", res => {
        this.lastEmergency = this.formatData(res.val())[0];
      });

    riverListener()
      .limitToLast(1)
      .on(
        "value",
        res => {
          this.riverData.push(this.formatData(res.val())[0]);
        },
        errorObject => {
          console.log("falhou na leitura: " + errorObject.name);
        }
      );
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
