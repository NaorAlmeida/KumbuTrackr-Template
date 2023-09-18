<template>
  <div
    :class="[boxStyle, 'px-4 py-14']">
  
    <div :class="[customClass, 'relative inline-block py-4 px-5']">
      <slot name="icon" />
    </div>
    <h3 class="font-bold text-xl py-4"><slot name="title" /></h3>
    <p class="leading-relaxed"><slot name="desc" /></p>
  </div>
</template>

<script>
export default {
  name: "FeatureCard",
  data () {
    return {    
    }
  },
  props: {
    customClass: String,
    boxStyle: String,
  }, 
};
</script>

