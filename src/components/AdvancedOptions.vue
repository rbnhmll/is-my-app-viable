<template>
  <section class="advanced_options">
    <div class="input_group">
      <label for="advanced_options">Advanced Options</label>
      <input type="checkbox" name="advanced_options" id="advanced_options">
    </div>

    <div class="">
      <h2>Check all that apply</h2>

      <label for="">Totally new idea!</label>
      <input type="checkbox" name="" id="">

      <label for="">Like Uber but _____</label>
      <input type="checkbox" name="" id="">

      <label for="">Disruptive</label>
      <input type="checkbox" name="" id="">

      <label for="">Profits over people</label>
      <input type="checkbox" name="" id="">

      <label for="">VC Approved</label>
      <input type="checkbox" name="" id="">

      <label for="">Zero capital</label>
      <input type="checkbox" name="" id="">

      <label for="">Came to you in a dream</label>
      <input type="checkbox" name="" id="">
      
      <label for="">Sound investment</label>
      <input type="checkbox" name="" id="">

      <label for="">Easy to develope</label>
      <input type="checkbox" name="" id="">
      <div class="input_group">
        <input type="submit" value="Submit">
      </div>
    </div>
  </section>
</template>

<script>
import friendly from "friendly-url";

export default {
  name: 'AdvancedOptions',
  data () {
    return {
      checkboxes: [
        "VC approved"
      ]
    }
  }
}
</script>

<style scoped>

</style>