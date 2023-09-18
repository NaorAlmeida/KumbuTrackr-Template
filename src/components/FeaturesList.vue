<template>
  <section class="bg-color-primary-light py-20 text-center" id="features">
    <div class="container">
      <SectionTitle>
        <template v-slot:sectionIntro> Como Funciona? </template>
        <template v-slot:sectionTitle>  Comece Com Três Passos Simples e Rápidos </template>
      </SectionTitle>
      <div
        class="grid lg:grid-cols-3 md:grid-cols-2 gap-12 lg:gap-8 px-4 sm:px-6"
      >
        <FeatureCard
          customClass="bg-color-primary-dark rounded-lg"
        >
          <template v-slot:icon><p class="text-5xl lg:after:content-[''] lg:after:flex lg:after:absolute lg:after:top-4 lg:after:left-32 lg:after:h-7 lg:after:w-32 lg:after:bg-[url('/img/line.png')] lg:after:bg-no-repeat">1</p></template>
          <template v-slot:title> Instale o Aplicativo </template>
          <template v-slot:desc>
            Você pode encontrar nas lojas comuns de aplicativos, como PlayStore
            ou AppStore
          </template>
        </FeatureCard>
        <FeatureCard customClass="bg-color-secondary rounded-lg">
          <template v-slot:icon> <p class="text-5xl lg:after:content-[''] lg:after:flex lg:after:absolute lg:after:top-8 lg:after:left-32 lg:after:h-7 lg:after:w-32 lg:after:bg-[url('/img/line-bottom.png')] lg:after:bg-no-repeat">2</p> </template>
          <template v-slot:title> Configure Seu Perfil </template>
          <template v-slot:desc>
            Depois de instalar, crie uma conta e configure seu perfil com
            informações relevantes.
          </template>
        </FeatureCard>
        <FeatureCard
          customClass="bg-color-primary-dark rounded-lg"
        >
          <template v-slot:icon>
            <p class="text-5xl">3</p>
          </template>
          <template v-slot:title>Comece a Usufruir </template>
          <template v-slot:desc>
            Depois do perfil criado, terá acesso ao dashboard e todad as
            funcionalidades do App.
          </template>
        </FeatureCard>
      </div>
    </div>
  </section>
</template>

<script>
import FeatureCard from "@/components/FeatureCard.vue";
import SectionTitle from "@/components/SectionTitle.vue";
export default {
  name: "FeaturesList",
  components: {
    FeatureCard,
    SectionTitle,
  },
};
</script>
