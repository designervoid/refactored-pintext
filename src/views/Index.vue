<template>
  <v-app>
    <AppBar />

    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar";
import HelloWorld from "@/components/HelloWorld";

export default {
  name: "App",

  components: {
    AppBar,
    HelloWorld
  },

  data: () => ({
    //
  })
};
</script>
