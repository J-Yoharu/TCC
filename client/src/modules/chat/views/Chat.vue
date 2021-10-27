<template>
  <v-row style="height: 100vh" class="tw-bg-blue-50">
    <v-col
      cols="12"
      md="4"
      class="tw-max-h-full"
      v-if="$vuetify.breakpoint.mdAndUp || selectUser == null"
    >
      <div style="max-height: 100%; height:100%; overflow: scroll">
        <v-list three-line style="min-height: 100%">
          <template v-for="(user, index) in users">
            <v-list-item @click="selectUser = 1" link :key="index">
              <v-list-item-avatar>
                <v-img v-if="user.avatar" :src="user.avatar" />
                <v-avatar color="primary" class="white--text" v-else>{{
                  user.initials
                }}</v-avatar>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  <v-badge
                    bordered
                    v-if="user.online"
                    bottom
                    color="green"
                    dot
                    offset-x="0"
                    offset-y="20"
                  >
                    {{ user.name }}
                  </v-badge>
                  <span v-else> {{ user.name }}</span>
                </v-list-item-title>
                <v-list-item-subtitle>{{
                  user.lastMessage
                }}</v-list-item-subtitle>
                <v-divider v-if="index != users.length"></v-divider>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </div>
    </v-col>
    <v-col
      class="tw-max-h-full"
      cols="12"
      md="8"
      v-if="$vuetify.breakpoint.width > 1000 || selectUser != null"
    >
      <div style="height: 100%" class="pa-5 tw-bg-white">
        <div
          class="d-flex align-center"
          style="vertial-align: middle; height: 7%; max-height: 7%"
        >
          <v-btn
            v-if="$vuetify.breakpoint.width < 1000 && selectUser != null"
            icon
            outlined
            @click="back"
          >
            <v-icon v-text="icons.mdiChevronLeft"></v-icon>
          </v-btn>
          <h1 class="pl-5 tw-text-xl">Jonathas</h1>
        </div>
        <div
          style="max-height: 85%; height: 85%; overflow: scroll"
          class="tw-border-t-2 d-flex flex-column-reverse pb-0 mb-0"
        >
          <div class="pa-4">
            <div
              class="d-flex py-1 tw-break-all"
              :class="message.userLogged ? 'flex-row-reverse' : ''"
              v-for="(message, index) in messages"
              :key="index"
            >
              <span class="tw-bg-blue-200 pa-3 tw-rounded-md tw-max-w-md">{{
                message.text
              }}</span>
            </div>
          </div>
        </div>
        <div class="d-flex align-end" style="max-height: 8%; height: 8%">
          <v-text-field
            v-model="message"
            @keyup.enter.exact="sendMessage"
            hide-details="auto"
            outlined
            label="enviar mensagem"
            :append-icon="icons.mdiSend"
          >
            <template v-slot:append>
              <v-icon
                class="ma-0"
                @click="sendMessage"
                v-text="icons.mdiSend"
              ></v-icon>
            </template>
          </v-text-field>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mdiSend, mdiChevronLeft } from "@mdi/js";
export default {
  methods: {
    sendMessage() {
      this.messages.push({
        text: this.message,
        userLogged: true
      });
      this.message = null;
    },
    back() {
      this.selectUser = null;
    }
  },
  data() {
    return {
      selectUser: null,
      message: null,
      icons: {
        mdiSend,
        mdiChevronLeft
      },
      messages: [
        {
          text:
            "Opa, boa noite!",
          userLogged: true
        },
        {
          text: "Testando...",
          userLogged: false
        },
       
      ],
      users: [
        {
          name: "Jonathas Augusto",
          initials: "JA",
          online: false,
          avatar:
            "https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2020/06/legiao_1dUgHsj4Oy_Z.jpg.jpeg",
          lastMessage: "Porra, tá ae?"
        },
        {
          name: "Michael Medina",
          initials: "MM",
          online: true,
          lastMessage: "Teste"
        },
        
      ]
    };
  }
};
</script>

<style>
::-webkit-scrollbar {
  width: 4px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: gray;
  border-radius: 10px;
}
</style>