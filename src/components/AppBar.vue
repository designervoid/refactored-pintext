<template>
  <v-app-bar app color="primary" dark>
    <v-spacer></v-spacer>

    <SearchBar />

    <v-spacer></v-spacer>

    <typePinDropdown />

    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
import SearchBar from "./SearchBar";
import typePinDropdown from "./typePinDropdown";

export default {
  components: {
    SearchBar,
    typePinDropdown
  }
};
</script>

<style lang="scss">
.v-input__slot {
  top: 10px;
  margin: 0;
}
</style>
