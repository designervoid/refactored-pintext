<template>
  <v-content align="center" justify="center">
    <CategoryDropdown />
    <div v-for="(recommendedHint, i) in recommendedHints" :key="i">
      <TheCard :object="recommendedHint" :isBookmarked="true" />
    </div>
  </v-content>
</template>

<script>
import CategoryDropdown from "./CategoryDropdown";
import TheCard from "./TheCard";
import { mapState } from "vuex";

export default {
  components: {
    TheCard,
    CategoryDropdown
  },
  computed: {
    ...mapState("search", ["searching", "entered"]),
    ...mapState("pins", ["recommendedHints"])
  }
};
</script>

<style lang="css" scoped></style>
