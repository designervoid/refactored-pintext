<template>
  <v-app>
    <AppBar />
    <v-content align="center" justify="center">
      searching: {{ searching }} <br />
      entered: {{ entered }} <br />
    </v-content>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    AppBar
  },
  computed: {
    ...mapState("search", ["searching", "entered"])
  }
};
</script>
