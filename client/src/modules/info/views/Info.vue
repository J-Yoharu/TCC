<template>
  <div>
    <h1 class="display-1 mb-5">Informações Úteis</h1>
    <v-row>
      <v-col
        md="4"
        cols="12"
        v-for="(card, index) in cards"
        :key="`${index} card`"
      >
        <CardInfo :card="card" />
      </v-col>

      <h1 class="display-1 mb-5 ml-5">FAQ</h1>

      <v-expansion-panels accordion>
        <v-expansion-panel v-for="(post, index) in posts" :key="index">
          <v-expansion-panel-header
            ><strong>{{ post.title }}</strong></v-expansion-panel-header
          >
          <v-expansion-panel-content>
            <component :is="post.component" />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </div>
</template>

<script>
import police from "../posts/images/police.jpg";
import fire from "../posts/images/fire.jpg";
import samu from "../posts/images/samu.jpg";

export default {
  components: {
    CardInfo: () => import("../components/CardInfo.vue"),
    EvitarEnchentes: () => import("../posts/EvitarEnchentes.vue"),
    perigos: () => import("../posts/Perigos.vue"),
    consequencias: () => import("../posts/ConsequenciasEnchentes.vue")
  },
  data() {
    return {
      cards: [
        {
          title: "Telefone da Polícia",
          img: police,
          description: `<strong style='font-size: 20px'>190</strong> <br/>  A população conta com dois telefones para o atendimento de ocorrências
          policiais, o <a href="tel:190"><strong>190</strong></a
          >, da Polícia Militar, e o <a href="tel:181"><strong>181</strong></a
          >, da Polícia Civil.`
        },
        {
          title: "Telefone do Bombeiro",
          img: fire,
          description: `<strong style='font-size: 20px'>193</strong> <br/> O telefone <a href="tel:193"><strong>193</strong></a> é o número do
          Corpo de Bombeiros para emergências, disponibilizado de forma gratuita
          em todo território nacional.`
        },
        {
          title: "Telefone do Samu",
          img: samu,
          description: `<strong style='font-size: 20px'>192</strong> <br/> O <a href="tel:192">192</a> é um serviço de atendimento pré-hospitalar
          de urgência e emergência da Prefeitura de São Paulo. Você pode acionar
          o serviço através de telefones sem utilizar fichas ou cartão.`
        }
      ],
      posts: [
        {
          title: "Como Evitar as enchentes?",
          component: "EvitarEnchentes"
        },
        {
          title: "Quais perigos as águas das enchentes podem causar?",
          component: "perigos"
        },
        {
          title: "Quais as consequências das enchente? ",
          component: "consequencias"
        }
      ],

      name: "Thiago",
      names: ["<p style='color: blue'>Michael</p>", "Thiago", "Jonathas"]
    };
  },
  methods: {
    teste() {
      console.log("michael e o cara!");
      this.name = "Michael";
    }
  }
};
</script>

<style></style>
