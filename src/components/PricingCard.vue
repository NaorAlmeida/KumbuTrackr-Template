<template>
  <div class="card">
    <!-- Front Side -->
    <div
      class="front px-7 py-7 rounded-2xl border 2 border-solid border-color-gray h-full w-full"
    >
      <div class="relative">
        <p class="text-5xl pl-2 font-bold after:content-['AOA'] after:text-sm">
          <slot name="price" />
        </p>
      </div>
      <div class="py-5">
        <h3 class="text-xl font-bold pb-3"> <slot name="plain" /> </h3>
        <p class="leading-relaxed">
          <slot name="description" />
        </p>
        <ul class="space-y-4 py-10">
          <li>
            <i class="bi bi-check-circle-fill text-color-secondary"></i>
            <span class="pl-4">Gestão de Custos</span>
          </li>
          <li>
            <i class="bi bi-check-circle-fill text-color-secondary"></i>
            <span class="pl-4">Controle de Despezas</span>
          </li>
          <li>
            <i class="bi bi-check-circle-fill text-color-secondary"></i>
            <span class="pl-4">Gestão de Custos</span>
          </li>
        </ul>
        <button class="btn">Assinar Agora</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PricingCard",
  data() {
    return {};
  },
};
</script>
<style scoped>
.card {
  @apply relative h-auto w-auto;
  perspective: 1000px;
  text-align: left;
}
.front,
.back {
  backface-visibility: hidden;
  transition: all 0.4s ease;
}
.front {
  overflow: hidden;
}
.btn {
  @apply bg-color-secondary font-bold rounded-md py-3 px-9 capitalize hover:opacity-80 ease-in duration-200 w-full;
}
</style>
