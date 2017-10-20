<template>
  <form @submit.prevent="submitForm">
    <label for="app_idea">App idea</label>
    <input class="app_idea" type="text" name="description" id="app_idea" @change="handleChange" required>
    
    <AdvancedOptions :handleChange="handleChange" />

    <div class="input_group">
        <input type="submit" value="Submit">
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
    "handleChange"
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

</style>
