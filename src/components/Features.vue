<template>
  <section class="bg-color-primary-light py-20 text-center" id="features">
    <div class="container">
      <SectionTitle>
        <template v-slot:sectionIntro> Recursos do App </template>
        <template v-slot:sectionTitle>  Gerencie Seus Gastos de Forma Rápida, Segura e Fácil </template>
      </SectionTitle>      
      <div
        class="grid lg:grid-cols-3 md:grid-cols-2 gap-12 lg:gap-8 px-4 sm:px-6"
      >
        <FeatureCard boxStyle="border hover:bg-color-primary-dark ease-in duration-200 border-2 border-solid border-color-gray rounded-2xl" customClass="bg-color-secondary rounded-2xl">
          <template v-slot:icon>
            <i class="bi bi-pie-chart-fill text-4xl"></i
          ></template>
          <template v-slot:title> Munitore Seus Gastos </template>
          <template v-slot:desc>
            Com o nosso painel integrado e uma serie de gráficos, pode
            facilmente monitorar seus gastos.
          </template>
        </FeatureCard>
        <FeatureCard boxStyle="border hover:bg-color-primary-dark ease-in duration-200 border-2 border-solid border-color-gray rounded-2xl" customClass="bg-color-secondary rounded-2xl">
          <template v-slot:icon>
            <i class="bi bi-clipboard-data-fill text-4xl"></i>
          </template>
          <template v-slot:title> Maximize Seus Ganhos </template>
          <template v-slot:desc>
            O KumbuTrackr ajuda-o a fazer uma análise cuidadosa para maximizar
            suas finanças.
          </template>
        </FeatureCard>
        <FeatureCard boxStyle="border hover:bg-color-primary-dark ease-in duration-200 border-2 border-solid border-color-gray rounded-2xl" customClass="bg-color-secondary rounded-2xl">
          <template v-slot:icon>
            <i class="bi bi-shield-fill-check text-4xl"></i>
          </template>
          <template v-slot:title> Dados Protegidos </template>
          <template v-slot:desc>
            Usamos um sistema de criptografia de dados, para uma elevada
            segundaça de suas informações.
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
  name: "Features",
  components: {
    FeatureCard,
    SectionTitle,
  },
};
</script>

