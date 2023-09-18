<template>
  <section class="py-20 text-center" id="testimonail">
    <div class="container">
      <SectionTitle>
        <template v-slot:sectionIntro> Clientes Satisfeitos </template>
        <template v-slot:sectionTitle>
          O Que Nossos Clientes Dizem Sobre o KumbuTrackr</template
        >
      </SectionTitle>
      <div class="flex items-center justify-center flex-wrap">
        <img
          id="user-1"
          @click="showComment"
          src="/img/user1.jpg"
          alt=""
          class="w-20 h-20 rounded-full cursor-pointer p-1 m-3"
        />
        <img
          id="user-2"
          @click="showComment"
          src="/img/user2.jpg"
          alt=""
          class="w-20 h-20 rounded-full cursor-pointer p-1 m-3"
        />
        <img
          id="user-3"
          @click="showComment"
          src="/img/user3.jpg"
          alt=""
          class="w-20 h-20 rounded-full cursor-pointer p-1 m-3"
        />
        <img
          id="user-4"
          @click="showComment"
          src="/img/user4.jpg"
          alt=""
          class="w-20 h-20 rounded-full cursor-pointer p-1 m-3"
        />
        <img
          id="user-5"
          @click="showComment"
          src="/img/user5.jpg"
          alt=""
          class="w-20 h-20 rounded-full cursor-pointer p-1 m-3"
        />
      </div>
      <div
        class="grid place-items-center text-center m-auto md:w/5 min-h-[40vh]"
      >
        <div class="user-text">
          <p class="md:text-2xl mb-6">
            {{ getComment }}
          </p>
          <h4 class="font-bold text-color-secondary mb-1">{{ getName }}</h4>
          <p class="">{{ getRule }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from "@/components/SectionTitle.vue";

export default {
  name: "Testimonail",
  components: {
    SectionTitle,
  },
  data() {
    return {
      getName: "Naor de Almeida",
      getRule: "Desenvolvedor Web FullStack",
      getComment:
        '"O Aplicativo cumpre com o que prmoete. Eu fiquei completamente satisfeito com os serviços do mesmo."',
      comments: [
        '"O Aplicativo cumpre com o que prmoete. Eu fiquei completamente satisfeito com os serviços do mesmo."',
        '"Esse aplicativo é o futuro, o futuro da evolução financeira!"',
        '"Simples e fácil de usar, Qualquer um consegue facilmente gerir seus gastos, sem complicações."',
        '"Faz-se muito, com poucos cliques. Simples e prático!"',
        '"Nunca vi nada igual, mesmo com tantos apps no mercado, este destaca-se."',
      ],
      names: [
        "Naor de Almeida-Desenvolvedor Web FullStack",
        "Alizeria Marcela-Estudante",
        "Mauro Paulo-Desenvolvedor Web & Mobile",
        "Jezael António-Contabilista e Gestor Fianceiro",
        "Mariana Ferreira-Gestora de Vendas",
      ],
    };
  },
  methods: {
    showComment($e) {
      let id = $e.target.id;
      id = id.split("-");
      id = id[1];
      let name = this.names[id - 1];
      name = name.split('-');
      this.getName = name[0];
      this.getRule = name[1];
      this.getComment = this.comments[id - 1];
    },
  },
};
</script>
