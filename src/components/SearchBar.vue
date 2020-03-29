<template lang="html">
  <div>
    <ComboboxSearch
      :render="typePinTitle === typePins[0].title"
      :hints="hintsGlobal"
    />
    <ComboboxSearch
      :render="typePinTitle === typePins[1].title"
      :hints="hintsUser"
    />
    <ComboboxSearch
      :render="typePinTitle === typePins[2].title"
      :hints="hintsUserSaved"
    />
  </div>
</template>

<script>
import ComboboxSearch from "./ComboboxSearch";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  components: {
    ComboboxSearch
  },
  computed: {
    ...mapState("typePin", ["typePinTitle", "typePins"]),
    ...mapGetters("pins", ["hintsGlobal", "hintsUser", "hintsUserSaved"])
  },
  created() {
    this.manualUpdateGetter();
  },
  methods: {
    ...mapActions("pins", ["manualUpdateGetter"])
  }
};
</script>

<style lang="css" scoped></style>
