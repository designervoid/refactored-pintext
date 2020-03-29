<template>
  <v-content align="center" justify="center">
    <CategoryDropdown />
    <div v-for="(recommendedHint, i) in recommendedHints" :key="i">
      <TheCard
        :object="recommendedHint"
        :isBookmarked="typePinTitle === typePins[0].title"
      />
    </div>
    <v-btn
      bottom
      color="pink"
      dark
      fab
      fixed
      right
      @click="dialog = !dialog"
      v-if="typePinTitle === typePins[1].title"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" width="800px">
      <ModalCard @close="closeDialog" @create="createPin" />
    </v-dialog>
  </v-content>
</template>

<script>
import CategoryDropdown from "./CategoryDropdown";
import TheCard from "./TheCard";
import ModalCard from "./ModalCard";
import { mapState } from "vuex";

export default {
  components: {
    TheCard,
    CategoryDropdown,
    ModalCard
  },
  data() {
    return {
      dialog: false
    };
  },
  computed: {
    ...mapState("search", ["searching", "entered"]),
    ...mapState("pins", ["recommendedHints"]),
    ...mapState("typePin", ["typePinTitle", "typePins"])
  },
  methods: {
    closeDialog() {
      this.dialog = false;
    }
    // createPin() {
    //   console.log("create pin");
    // }
  }
};
</script>

<style lang="css" scoped></style>
