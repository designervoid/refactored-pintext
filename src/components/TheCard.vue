<template>
  <v-card class="mx-auto my-2" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">{{
          object.title
        }}</v-list-item-title>
        <v-list-item-subtitle>{{ object.text }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions v-if="isBookmarked">
      <v-btn
        icon
        @click="clickedBookmark()"
        v-bind:class="{ 'non-active-bookmark': !isActiveBookmark }"
      >
        <v-icon>mdi-bookmark</v-icon>
      </v-btn>
    </v-card-actions>

    <div class="badges px-4 pr-4">
      <v-chip class="ma-2" v-for="(badge, index) in object.badges" :key="index">
        {{ badge }}
      </v-chip>
    </div>

    <v-snackbar v-if="isBookmarked" v-model="snackbar" :timeout="timeout">
      {{
        isActiveBookmark
          ? 'Пинтекст успешно добавлен. Вы можете увидеть его во вкладке "Сохраненные пинтексты".'
          : "Пинтекст удален из закладок."
      }}
      <v-btn
        v-if="isActiveBookmark"
        color="blue"
        text
        @click="snackbar = false"
      >
        Посмотреть
      </v-btn>
      <v-btn color="blue" text @click="snackbar = false">
        Закрыть
      </v-btn>
    </v-snackbar>
  </v-card>
</template>

<script>
// import { mapMutations, mapActions } from "vuex";
export default {
  props: {
    object: {
      type: Object,
      default() {
        return {};
      }
    },
    isBookmarked: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  data: () => ({
    snackbar: false,
    timeout: 2000,
    snackbarText: "",
    isActiveBookmark: false
  }),
  methods: {
    clickedBookmark() {
      this.snackbar = true;
      this.isActiveBookmark = !this.isActiveBookmark;
    }
  }
};
</script>

<style lang="scss" scoped>
.badges {
  height: 6rem !important;
  overflow: auto;
}
::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 7px;
}
::-webkit-scrollbar-thumb {
  border-radius: 4px;
  height: 3rem !important;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
}
.non-active-bookmark {
  opacity: 0.4;
}
</style>
