<template>
  <section class="advanced_options">
    <div class="input_group">
      <label for="advanced_options">Show Advanced Options</label>
      <input
        type="checkbox"
        name="advanced_options"
        id="advanced_options"
        v-model="show_advanced"
      >
    </div>

    <div class="advanced_options__inputs" v-show="show_advanced">
      <h2>Check all that apply</h2>
      <span
        class="input_group"
        v-for="(check, i) in checkboxes"
        v-bind:key="i"
      >
        <input
          class="advanced_options__checkbox"
          type="checkbox"
          name="options"
          :id="friendly(check)"
          :value="check"
          v-model="selected_options"
        >
        <label
          class="advanced_options__label"
          tabindex="0"
          :for="friendly(check)"
        >
          {{check}}
        </label>
      </span>
    </div>
  </section>
</template>

<script>
import friendly_url from "friendly-url";
import { checkboxes } from "../list_data";

export default {
  name: 'AdvancedOptions',
  props: [
    "handleChange"
  ],
  data () {
    return {
      checkboxes,
      selected_options: [],
      show_advanced: false
    }
  },
  methods: {
    friendly: friendly_url
  },
  watch: {
    selected_options() {
      this.handleChange(this.selected_options);
    }
  }
}
</script>

<style scoped>
.advanced_options {
  margin-bottom: 25px;
}

.advanced_options__inputs {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}

.advanced_options__inputs h2 {
  grid-column-start: 1;
  grid-column-end: 5;
}

.advanced_options__checkbox {
  display: none;
}

.advanced_options__label {
  border: 2px solid lightgrey;
  display: block;
  padding: 5px;
}

.advanced_options__checkbox:checked + .advanced_options__label {
  border: 2px solid #bada55;
}

</style>