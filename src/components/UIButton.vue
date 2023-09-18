<template>
  <button
    class="bg-color-secondary font-bold rounded-md py-3 px-9 capitalize hover:opacity-80 ease-in duration-200" 
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "UIButton",
};
</script>
