<template>
  <form @submit.prevent="submitForm">
    <label for="app_idea">App idea</label>
    <input class="app_idea" type="text" name="description" id="app_idea" @change="handleChange" required>
    
    <div class="input_group toggle_advanced_options">
      <label for="advanced_options">Show Advanced Options</label>
      <input
        type="checkbox"
        name="advanced_options"
        id="advanced_options"
        @click="handleClick"
        :checked="show_advanced"
      >
    </div>

    <AdvancedOptions
      v-show="show_advanced"
      :handleChange="handleChange"
    />

    <div class="input_group">
      <input type="submit" value="Evaluate">
    </div>
  </form>
</template>

<script>
import friendly from "friendly-url";
import AdvancedOptions from "./AdvancedOptions"

export default {
  name: 'IdeaForm',
  components: {
    AdvancedOptions
  },
  props: [
    "advanceStage",
    "handleChange",
    "show_advanced",
    "handleClick",
    "handleSubmit"
  ],
  data () {
    return {
      checkboxes: [
        "VC approved"
      ]
    }
  },
  methods: {
    submitForm(e) {
      this.handleSubmit();
      this.advanceStage();
    }
  }
}
</script>

<style scoped>
.app_idea {
  font-size: 30px;
  display: block;
  width: 100%;
  padding: 5px 15px;
}

.toggle_advanced_options {
  margin: 25px 0;
}

</style>
