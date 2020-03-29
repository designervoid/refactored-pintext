<template lang="html">
  <div>
    <ComboboxSearch
      :render="typePinTitle === typePins[0].title"
      :hints="pinsListGlobal"
    />
    <ComboboxSearch
      :render="typePinTitle === typePins[1].title"
      :hints="pinsListUser"
    />
    <ComboboxSearch
      :render="typePinTitle === typePins[2].title"
      :hints="pinsListUserSaved"
    />
  </div>
</template>

<script>
import ComboboxSearch from "./ComboboxSearch";
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    ComboboxSearch
  },
  computed: {
    ...mapState("typePin", ["typePinTitle", "typePins"]),
    ...mapGetters("pins", [
      "pinsListGlobal",
      "pinsListUser",
      "pinsListUserSaved"
    ])
  }
};
</script>

<style lang="css" scoped></style>
