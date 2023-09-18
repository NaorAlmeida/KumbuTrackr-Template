<template>
  <section class="py-20" id="blog">
    <div class="container">
      <SectionTitle>
        <template v-slot:sectionIntro> Últimas Notícias </template>
        <template v-slot:sectionTitle>
        Fique a Par Das Novidades do Mercado Financeiro Mundial</template
        >
      </SectionTitle>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <BlogCard imgsrc="/img/blog1.jpg">
          <template v-slot:date>28 Abril 2023</template>
          <template v-slot:title> Quatro Formas de Sustentar Seu Negócio. </template>
          <template v-slot:desc> Neste artigo, mostraremos para si, quatro maneiras de sustentar seu negócio. Começaremos, primeiro por destacar...</template>
        </BlogCard>
        <BlogCard imgsrc="/img/blog2.jpg">
          <template v-slot:date>04 Julho 2023</template>
          <template v-slot:title> Como Ter Um Controle das Seus Gastos? </template>
          <template v-slot:desc> Para que o dinheiro seja bem gasto, precisa havver um controle do mesmo. Mas como ter esse tal controle? Por onde começar...</template>
        </BlogCard>
        <BlogCard imgsrc="/img/blog3.jpg">
          <template v-slot:date>15 Setembro 2023</template>
          <template v-slot:title> Investir no Digital - Vale a Pena? </template>
          <template v-slot:desc> Neste artigo, mostraremos para si, se vale a pena ou não ter um negócio na internet. Então, vamos começar, por entender o que é um negócio digital...</template>
        </BlogCard>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from "@/components/SectionTitle.vue";
import BlogCard from "@/components/BlogCard.vue";

export default {
  name: "BlogSection",
  components: {
    SectionTitle,
    BlogCard,
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
