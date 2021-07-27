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
      <v-col cols="12" md="4" class="d-flex justify-center align-center">
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
      <v-col>
        <v-carousel
          cycle
          hide-delimiter-background
          height="500"
          v-model="carousel"
          style="margin-bottom: 55px"
        >
          <v-carousel-item v-for="(day, index) in days" :key="index">
            <v-sheet height="100%" color="green">
              <v-row>
                <v-col cols="3">
                  <v-card class="mx-auto mt-5" max-width="400">
                    <v-list-item two-line>
                      <v-list-item-content>
                        <v-list-item-title class="text-h5">
                          São Paulo
                        </v-list-item-title>
                        <v-list-item-subtitle>
                          {{ day }}, 12:30 PM, Mostly sunny
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>

                    <v-card-text>
                      <v-row align="center">
                        <v-col class="text-h2" cols="6"> 23&deg;C </v-col>
                        <v-col cols="6">
                          <v-img
                            src="https://cdn.vuetifyjs.com/images/cards/sun.png"
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
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-footer padless absolute>
      <v-col class="text-center pa-0" cols="12">
        <v-btn color="black" text rounded class="my-2"> Home </v-btn>
        <v-btn color="black" text rounded class="my-2"> Contato </v-btn>
        <v-btn color="black" text rounded class="my-2"> Quem somos </v-btn>
      </v-col>
      <v-col class="text-center pa-0" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>TCC - Ciências da computação</strong>
      </v-col>
    </v-footer>
  </div>
</template>

<script>
import { mdiAccessPoint, mdiSend, mdiCloudDownload } from "@mdi/js";
export default {
  data() {
    return {
      icons: {
        mdiAccessPoint,
        mdiSend,
        mdiCloudDownload
      },
      days: [
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sabado",
        "Domingo"
      ],
      carousel: 0,
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
    socketAdress() {
      return `ws://${process.env.VUE_APP_WEBSOCKET_HOST}:${process.env.VUE_APP_WEBSOCKET_PORT}`;
    }
  },
  created() {
    console.log(this.socketAdress);
    const ws = new WebSocket(this.socketAdress);
    console.log(ws);
    ws.onmessage = function(msg) {
      console.log(msg);
      this.porcent = msg.data;
    };
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
  height: 400px;
}
</style>
