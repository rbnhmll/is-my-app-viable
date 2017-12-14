<template>
  <header>
    <h1>{{ appName }}</h1>
    <h2>{{ subText }}</h2>
  </header>
</template>

<script>
import friendly from "friendly-url";

export default {
  name: 'Banner',
  data () {
    return {
      appName: "Shart Tank",
      subText: "Is my App viable?"
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>

  h1 {
    text-transform: uppercase;
  }

</style>
