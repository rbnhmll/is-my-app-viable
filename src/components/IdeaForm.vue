<template>
  <form>
    <label for="app_idea">App idea</label>
    <input type="text" name="app_idea" id="app_idea">
    
    <div class="advanced_options">
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

      <input type="submit" value="Submit">
    </div>
  </form>
</template>

<script>
import friendly from "friendly-url";
console.log(friendly);

export default {
  name: 'IdeaForm',
  data () {
    return {
      checkboxes: [
        "VC approved"
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
