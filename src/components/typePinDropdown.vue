<template>
  <v-menu
    transition="slide-x-transition"
    :min-width="minWidth"
    bottom
    right
    offset-y
  >
    <template v-slot:activator="{ on }">
      <v-btn
        class="deep-orange"
        color="primary"
        :min-width="minWidth"
        dark
        v-on="on"
      >
        {{ typePinTitle }}
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="(typePin, i) in typePins"
        :key="i"
        @click="changeTypePinTitle({ title: typePin.title })"
      >
        <v-list-item-title>{{ typePin.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      minWidth: "150",
      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" }
      ]
    };
  },
  computed: {
    ...mapState("typePin", ["typePinTitle", "typePins"])
  },
  methods: {
    ...mapActions("typePin", ["changeTypePinTitle"])
  }
};
</script>

<style lang="css" scoped></style>
