<template>
  <v-app>
    <AppBar />
    <CardsView />
    <!-- <v-content align="center" justify="center">
      searching: {{ searching }} <br />
      entered: {{ entered }} <br />
      recommended items: <br />
      <code>{{ recommendedHints }}</code>
    </v-content> -->
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar";
import CardsView from "@/components/CardsView";

export default {
  name: "App",
  components: {
    AppBar,
    CardsView
  }
};
</script>
