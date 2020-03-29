<template>
  <v-app>
    <AppBar />
    <v-content>
      content here
    </v-content>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar";

export default {
  name: "App",
  components: {
    AppBar
  }
};
</script>
