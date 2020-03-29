<template>
  <!-- v-if="recommendedPinsGlobal.length > 0 && searchDropdownTitle === 'Все пинтексты'" -->
  <v-row>
    <v-col cols="12">
      <v-menu offset-y :close-on-click="true">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">
            {{ categoryTitle }}
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(recommendedPin, i) in recommendedPins"
            :key="i"
            @click="changeCategoryTitle({ title: recommendedPin })"
          >
            <v-list-item-title>{{ recommendedPin }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <div class="refresh-category" v-if="categoryTitle !== 'Выберите пин'">
        <div class="mx-2 my-1">
          <v-btn depressed small color="error" @click="refreshCategory()"
            >Сбросить категорию</v-btn
          >
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("category", ["categoryTitle"]),
    ...mapState("pins", ["recommendedPins"])
  },
  methods: {
    ...mapActions("category", ["changeCategoryTitle", "refreshCategory"])
  }
};
</script>

<style lang="css" scoped></style>
