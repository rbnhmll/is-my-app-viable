<template>
  <form @submit.prevent="submitForm">
    <label for="app_idea">App idea</label>
    <input class="app_idea" type="text" name="app_idea" id="app_idea" @change="updateAppIdea" required>
    
    <AdvancedOptions />

    <div class="input_group">
        <input type="submit" value="Submit">
    </div>
  </form>
</template>

<script>
import AdvancedOptions from "./AdvancedOptions"
import friendly from "friendly-url";

export default {
  name: 'IdeaForm',
  components: {
    AdvancedOptions
  },
  props: [
    "advanceStage",
    "updateAppIdea"
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
