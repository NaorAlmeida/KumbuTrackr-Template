<template>
<main>
  <AppHeader />  
  <AppMain />  
</main>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppMain from "@/components/AppMain.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
    }
  }
};
</script>

<style>

</style>
