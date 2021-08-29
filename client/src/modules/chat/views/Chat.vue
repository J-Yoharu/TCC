<template>
  <v-row no-gutters>
    <v-col class="mr-0" cols="12" md="2">
      <v-card height="85vh" max-height="85vh">
        <v-toolbar flat color="cyan" style="color: white">
          Conversas
          <v-spacer></v-spacer>
          <v-btn text icon>
            <v-icon v-text="icons.mdiAccountSearch"> </v-icon>
          </v-btn>
        </v-toolbar>
        <User :users="users" />
      </v-card>
    </v-col>
    <v-col cols="12" md="8">
      <v-sheet color="white" elevation="1" height="100">Teste</v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import { mdiAccountSearch } from "@mdi/js";
import socket from "@/plugins/socket";
export default {
  data() {
    return {
      icons: {
        mdiAccountSearch
      },
      users: [],
      chats: [
        {
          user: {
            first_name: "Jonathas Augusto",
            last_name: "Augusto",
            initials: "JA",
            avatar:
              "https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2020/06/legiao_1dUgHsj4Oy_Z.jpg.jpeg"
          },
          last_message: "Eu sou Yosharu Yohida e o Igor é gostoso"
        },
        {
          user: {
            first_name: "João Apostulo",
            last_name: "Apostulo",
            initials: "JA",
            avatar:
              "https://s.aficionados.com.br/imagens/my-hero-academia-tudo-que-voce-quer-saber-sobre-izuku-midoriya_f.jpg"
          },
          last_message: "Eu sou Miltonius AE e o Igor é gostoso"
        }
      ]
    };
  },
  created() {
    socket.on("connect", () => {
      console.log("conectou o front");
    });

    socket.on("users", data => {
      this.users = data.users;
      console.log(data.data);
    });
  },
  components: {
    User: () => import("../components/User")
  },
  destroyed() {
    socket.off("connect");
    socket.off("disconnect");
    socket.off("users");
    socket.off("user connected");
    socket.off("user disconnected");
    socket.off("private message");
  }
};
</script>

<style>
</style>