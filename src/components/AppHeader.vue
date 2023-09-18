<template>
  <header id="home">
    <AppMenu />
     <Hero>
        <template v-slot:leftColumn>
          <h1 class="font-bold text-3xl md:text-4xl pb-5 leading-snug">
            Todos os Seus Gastos Num só Lugar!
          </h1>
          <p class="mb-5 leading-relaxed">
            Agora ficou mais fácil gerir as suas finanças;com apenas alguns cliques
            organize, munitore e gerencie seus gastos, ganhos, despesas, e muito
            mais.
          </p>
          <UIButton> Baixar Aplicativo </UIButton>
        </template>
        <template v-slot:rightColumn>
          <img src="/img/hero4.png" alt="KumbuTrackr - Gerencie suas finanças" />
        </template>
    </Hero>
    <AppMain />
  </header>
</template>

<script>
import AppMenu from "@/components/AppMenu.vue";
import Hero from "@/components/Hero.vue";
import UIButton from "@/components/UIButton.vue";

export default {
  name: "AppHeader",
  components: {
    AppMenu,
    Hero,
    UIButton,
  },
};
</script>

<style scoped></style>
