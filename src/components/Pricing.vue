<template>
  <section class="bg-color-primary-light py-20 text-center" id="price">
    <div class="container">
      <SectionTitle>
        <template v-slot:sectionIntro> Preços Atrativos </template>
        <template v-slot:sectionTitle>
          Seleccione o Melhor Plano Para Si ou Seu Negócio</template
        >
      </SectionTitle>

      <div class="mt-5 flex items-center justify-center gap-4">
        <p>Mensal</p>
        <label
          for="toggler"
          class="relative cursor-pointer inline-block w-20 h-8 rounded-fill"
        >
          <input
            type="checkbox"
            @change="togglePricing"
            class="peer opacity-0 w-0 h-0"
            id="toggler"
          />
          <span
            class="absolute top-0 left-0 right-0 bottom-0 duration-300 bg-color-primary-light border border-solid border-color-gray rounded-full before:content-[''] before:absolute before:w-6 before:h-6 before:bottom-1 before:bg-white before:left-1 before:rounded-full peer-checked:before:translate-x-12 peer-checked:bg-color-secondary before:duration-300"
          ></span>
        </label>
        <p>Anual</p>
      </div>
      <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3 pt-8">
        <PricingCard>
          <template v-slot:price> {{ priceBasic }} </template>
          <template v-slot:plain> Basic</template>
          <template v-slot:description>
            Este plano destina-se ao controle de despesas pessoais
          </template>
        </PricingCard>
        <PricingCard>
          <template v-slot:price> {{ priceStandard }} </template>
          <template v-slot:plain> Standard</template>
          <template v-slot:description>
            Este plano destina-se a micro e pequenas empresas
          </template>
        </PricingCard>
        <PricingCard>
          <template v-slot:price> {{ pricePrimiun }} </template>
          <template v-slot:plain> Premium</template>
          <template v-slot:description>
            Este plano destina-se a grandes empresas
          </template>
        </PricingCard>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from "@/components/SectionTitle.vue";
import PricingCard from "@/components/PricingCard.vue";

export default {
  name: "Pricing",
  components: {
    SectionTitle,
    PricingCard,
  },
  data() {
    return {
      priceBasic: "6.500",
      priceStandard: "12.900",
      pricePrimiun: "36.000",
    };
  },
  methods: {
    togglePricing($e) {
      if ($e.target.checked) {
        this.priceBasic *= 12;
        this.priceStandard *= 12;
        this.pricePrimiun *= 12;
      }else{
        this.priceBasic /= 12;
        this.priceStandard /= 12;
        this.pricePrimiun /= 12;
      }
      
      this.priceBasic = this.priceBasic.toFixed(3);
      this.priceStandard = this.priceStandard.toFixed(3);
      this.pricePrimiun = this.pricePrimiun.toFixed(3);
    },
  },
};
</script>
