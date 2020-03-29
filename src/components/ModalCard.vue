<template>
  <v-card>
    <v-card-title class="darken-2">
      Create pintext
    </v-card-title>
    <v-container>
      <v-row class="mx-2">
        <v-col cols="12">
          <v-select
            v-model="modal.pin"
            :items="pinsGlobal"
            menu-props="auto"
            label="Select pin"
            hide-details
            prepend-icon="mdi-pin"
            single-line
            @change="updateState"
          ></v-select>
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
        @click="createPin()"
        :disabled="
          !modal.title.length > 0 ||
            !modal.text.length > 0 ||
            !modal.badges.length > 0 ||
            isDisabledPin
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
      },
      isDisabledPin: true
    };
  },
  computed: {
    ...mapGetters("pins", ["hintsGlobal", "pinsGlobal"])
  },
  methods: {
    closeDialog() {
      this.$emit("close");
    },
    createPin() {
      this.$emit("create", this.modal);
    },
    updateState() {
      this.isDisabledPin = false;
    },
    remove(item) {
      this.modal.badges.splice(this.modal.badges.indexOf(item), 1);
      this.modal.badges = [...this.modal.badges];
    }
  }
};
</script>

<style lang="css" scoped></style>
