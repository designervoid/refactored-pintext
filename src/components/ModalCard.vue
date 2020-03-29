<template>
  <v-card>
    <v-card-title class="darken-2">
      Create pintext
    </v-card-title>
    <v-container>
      <v-row class="mx-2">
        <v-col cols="12">
          <v-text-field
            prepend-icon="mdi-text"
            placeholder="Pin"
            v-model="modal.pin"
          />
        </v-col>
      </v-row>
      <v-row class="mx-2">
        <v-col cols="12">
          <v-text-field
            prepend-icon="mdi-text"
            placeholder="Title"
            v-model="modal.title"
          />
        </v-col>
      </v-row>
      <v-row class="mx-2">
        <v-col cols="12">
          <v-text-field
            prepend-icon="mdi-text"
            placeholder="Text"
            v-model="modal.text"
          />
        </v-col>
      </v-row>
      <v-row class="mx-2">
        <v-col cols="12">
          <v-combobox
            v-model="modal.badges"
            :items="hintsGlobal"
            chips
            clearable
            label="Write badges"
            multiple
            prepend-icon="mdi-text"
            solo
          >
            <template v-slot:selection="{ attrs, item, select, selected }">
              <v-chip
                v-bind="attrs"
                :input-value="selected"
                close
                @click="select"
                @click:close="remove(item)"
              >
                {{ item }}
              </v-chip>
            </template>
          </v-combobox>
        </v-col>
      </v-row>
    </v-container>
    <v-card-actions>
      <v-spacer />
      <v-btn text color="primary" @click="closeDialog()">Cancel</v-btn>
      <v-btn
        text
        @click="closeDialog()"
        :disabled="
          !modal.badges.length > 0 ||
            !modal.title.length > 0 ||
            !modal.text.length > 0 ||
            !modal.pin.length > 0
        "
        >Save</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    dialog: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  data() {
    return {
      modal: {
        pin: "",
        title: "",
        text: "",
        badges: []
      }
    };
  },
  computed: {
    ...mapGetters("pins", ["hintsGlobal"])
  },
  methods: {
    closeDialog() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="css" scoped></style>
