<template lang="html">
  <!-- v-if="searchDropdownTitle === 'Все пинтексты'" -->
  <v-combobox
    prepend-inner-icon="mdi-magnify"
    solo-inverted
    flat
    v-model="entered"
    :items="hints"
    :search-input.sync="searching"
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
export default {
  data() {
    return {
      searching: null,
      entered: "",
      menuProps: {
        closeOnContentClick: true
      },
      hints: ["1", "2", "3"]
    };
  }
};
</script>

<style lang="css" scoped></style>
