<template>
  <section class="py-20" id="contact">
    <div class="container text-center">
      <SectionTitle>
        <template v-slot:sectionIntro> Tem Alguma Pergunta? </template>
        <template v-slot:sectionTitle> Entre em Contacto Connosco</template>
      </SectionTitle>
      <form class="w-full md:w-2/3 mx-auto">
        <div class="grid md:grid-cols-2 mb-5 gap-5">
          <input type="text" placeholder="Nome Completo" class="formInput" />
          <input type="text" placeholder="E-mail" class="formInput" />
        </div>
        <div class="grid md:grid-cols-2 mb-5 gap-5">
          <input type="text" placeholder="Telefone" class="formInput" />
          <input type="text" placeholder="Empresa" class="formInput" />
        </div>
        <textarea
          placeholder="Mensagem"
          id=""
          cols="30"
          rows="4"
          class="formInput w-full mb-5"
        ></textarea>
        <UIButton>Enviar Mensagem</UIButton>
      </form>
    </div>
  </section>
</template>

<script>
import SectionTitle from "@/components/SectionTitle.vue";
import UIButton from "@/components/UIButton.vue";

export default {
  name: "ContactUs",
  components: {
    SectionTitle,
    UIButton,
  },
};
</script>
<style scoped>
.formInput {
  @apply py-2 px-5 rounded-md bg-white border-none;
}
</style>
