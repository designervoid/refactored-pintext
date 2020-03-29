<template>
  <v-combobox
    v-if="render"
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
    clearable
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
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  props: {
    hints: {
      type: Array,
      default() {
        return [];
      }
    },
    render: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  data() {
    return {
      menuProps: {
        closeOnContentClick: true
      }
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
    ...mapActions("pins", ["findElementInPins", "pushRecomendedHints"]),
    ...mapMutations("search", ["UPDATE_SEARCHING", "SET_ENTERED"]),
    onChange() {
      this.$nextTick(() => {
        this.$refs.searchField.isMenuActive = false;
        this.findElementInPins({
          entered: this.entered_
        });
        this.pushRecomendedHints();
      });
    }
  }
};
</script>

<style lang="css" scoped></style>
