<template>
  <div>
    <h1 class="display-1 mb-5">Informações Úteis</h1>
    <v-row>
      <v-col cols="12" md="3" v-for="card in cards" :key="card">
        <CardInfo :card="card" />
      </v-col>
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="(item, i) in 5" :key="i">
          <v-expansion-panel-header>Item</v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </div>
</template>

<script>
export default {
  components: {
    CardInfo: () => import("../components/CardInfo.vue"),
  },
  data() {
    return {
      cards: [
        {
          title: "Telefone da Polícia",
          description: ` A população conta com dois telefones para o atendimento de ocorrências
          policiais, o <a href="tel:190"><strong>190</strong></a
          >, da Polícia Militar, e o <a href="tel:181"><strong>181</strong></a
          >, da Polícia Civil.`,
        },
        {
          title: "Telefone do Bombeiro",
          description: ` O telefone <a href="tel:193"><strong>193</strong></a> é o número do
          Corpo de Bombeiros para emergências, disponibilizado de forma gratuita
          em todo território nacional.`,
        },
        {
          title: "Telefone do Samú",
          description: ` O <a href="tel:192">192</a> é um serviço de atendimento pré-hospitalar
          de urgência e emergência da Prefeitura de São Paulo. Você pode acionar
          o serviço através de telefones sem utilizar fichas ou cartão.`,
        },
      ],
      name: "Thiago",
      names: ["<p style='color: blue'>Michael</p>", "Thiago", "Jonathas"],
    };
  },
  methods: {
    teste() {
      console.log("michael e o cara!");
      this.name = "Michael";
    },
  },
};
</script>

<style></style>
