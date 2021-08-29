<template>
  <component :is="component"></component>
</template>

<script>
import layouts from "@/modules/app";

export default {
  name: "App",
  computed: {
    component() {
      return layouts[this.$route.meta.layout];
    }
  },
  methods: {}
};
</script>
