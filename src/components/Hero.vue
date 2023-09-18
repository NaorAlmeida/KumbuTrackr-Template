<template>
  <section
    class="container flex flex-col md:flex-row justify-between items-center py-20 relative">
    <div class="absolute top-0 left-0 w-80 h-80 bg-color-blob -z-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
    <div class="absolute bottom-0 right-0 w-80 h-80 bg-color-secondary -z-10 blur-2xl opacity-30 overflow-hidden rounded-full mb-12"></div>
    <div class="text-center md:text-left mb-12 md:w-1/2 md:pr-10">
    <slot name="leftColumn" />
    </div>
    <div class="text-center md:text-left mb-12 md:w-1/2 md:pr-10">    
      <slot name="rightColumn" />
    </div>
  </section>
</template>

<script>
import UIButton from "@/components/UIButton.vue";

export default {
  name: "Hero",
  components: { UIButton },
};
</script>
