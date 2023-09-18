<template>
    <div class="md:w-1/2 mx-auto text-center">
        <span class="block text-color-secondary font-bold"><slot name="sectionIntro" /></span>
        <h2 class="font-bold text-2xl md:text-3xl pb-10 leading-snug">
            <slot name="sectionTitle" />
        </h2>
      </div>
</template>

<script>
    export default {
        name: "SectionTitle",
    }
</script>