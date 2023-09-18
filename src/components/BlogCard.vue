<template>
  <div class="blog-card">
    <div class="scale-100 rounded-xl overflow-hidden lg:h-[40vh]">
      <img
        :src="imgsrc"
        alt="Blog Image"
        class="w-full lg:h-full hover:scale-125 trasition duration-300 ease-in-out"
      />
    </div>

    <div class="flex justify-between pt-5 pb-8">
      <p class="leading-relaxed"><slot name="date" /></p>
      <p class="leading-relaxed bg-color-blue px-3 py-1 rounded-md">
        Mais Lidos
      </p>
    </div>
    <a
      href="#"
      class="hover:text-color-secondary underline hover:no-underline text-2xl font-bold"
    >
      <slot name="title" />
    </a>
    <p class="leading-relaxed py-5">
      <slot name="desc" />
    </p>
    <a
      href="#"
      class="hover:text-color-secondary underline hover:no-underline font-bold"
      >Saiba Mais</a
    >
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    imgsrc: String,
  },
};
</script>

<style scoped></style>
