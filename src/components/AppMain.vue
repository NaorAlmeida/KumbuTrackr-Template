<template>
  <div>
    <Features />
    <Hero>
      <template v-slot:leftColumn>
        <img src="/img/hero3.png" alt="KumbuTrackr - Gerencie suas finanças" />
      </template>
      <template v-slot:rightColumn>
        <h2 class="font-bold text-3xl md:text-4xl pb-5 leading-snug">
          O Melhor Aplicativo de Gerenciamento e Controle Financeiro 
        </h2>
        <p class="mb-5 leading-relaxed">
          Agora ficou mais fácil gerir as suas finanças;com apenas alguns
          cliques organize, munitore e gerencie seus gastos, ganhos, despesas, e
          muito mais.
        </p>
        <UIButton> Saiba Mais </UIButton>
      </template>
    </Hero>    
    <FeaturesList />
    <Testimonail />
    <Pricing />
    <BlogSection />
    <DownloadApp />
    <ContactUs />
    <AppFooter />
  </div>
</template>

<script>
import Features from "@/components/Features.vue";
import FeaturesList from "@/components/FeaturesList.vue";
import Hero from "@/components/Hero.vue";
import Testimonail from "@/components/Testimonail.vue";
import Pricing from "@/components/Pricing.vue";
import UIButton from "@/components/UIButton.vue";
import BlogSection from "@/components/BlogSection.vue";
import DownloadApp from "@/components/DownloadApp.vue";
import ContactUs from "@/components/ContactUs.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "AppMain",
  components: {
    Features,
    FeaturesList,
    Hero,
    Testimonail,
    Pricing,
    UIButton,
    BlogSection,
    DownloadApp,
    ContactUs,
    AppFooter,
  },
};
</script>
