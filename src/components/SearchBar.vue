<template lang="html">
  <!-- v-if="searchDropdownTitle === 'Все пинтексты'" -->
  <v-combobox
    prepend-inner-icon="mdi-magnify"
    solo-inverted
    flat
    v-model="entered_"
    :items="hints"
    :search-input.sync="searching_"
    hide-selected
    class="hidden-sm-and-down"
    label="Search"
    persistent-hint
    :menu-props="menuProps"
    ref="searchField"
    @change="onChange()"
  >
    <template v-slot:no-data>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            Press "enter" to search for "<strong>{{ searching }}</strong
            >".
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-combobox>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      menuProps: {
        closeOnContentClick: true
      },
      hints: ["1", "2", "3"]
    };
  },
  computed: {
    ...mapState("search", ["searching", "entered"]),
    searching_: {
      get() {
        return this.searching;
      },
      set(value) {
        this.UPDATE_SEARCHING(value);
      }
    },
    entered_: {
      get() {
        return this.entered;
      },
      set(value) {
        this.SET_ENTERED(value);
      }
    }
  },
  methods: {
    ...mapMutations("search", ["UPDATE_SEARCHING", "SET_ENTERED"]),
    onChange() {
      this.$nextTick(() => {
        this.$refs.searchField.isMenuActive = false;
      });
    }
  }
};
</script>

<style lang="css" scoped></style>
