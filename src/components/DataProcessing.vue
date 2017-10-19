<template>
  <section class="data_processing">
    <h4><i class="fa fa-spinner fa-pulse fa-fw" aria-hidden="true"></i>
    Processing Data...</h4>
  </section>
</template>

<script>
export default {
  name: 'DataProcessing',
  props: [
    "advanceStage"
  ],
  data () {
    return {
      data_messages: [

      ]
    }
  },
  mounted() {
    setTimeout(() => {
      this.advanceStage();
    }, 3000);
    
  }
}
</script>

<style scoped>

</style>