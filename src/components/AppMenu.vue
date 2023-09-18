<template>
  <nav>
    <div class="container flex justify-between items-center">
      <a
        href="/"
        class="text-color-secondary py-5 w-20 font-bold md:text-3xl text-2xl"
        >Kumbu<span class="text-white">Trackr.</span></a
      >
      <ul class="hidden lg:flex items-center space-x-6">
        <li>
          <a href="#home" class="hover:text-color-secondary ease-in duration-200">Início</a>
        </li>
        <li><a href="#features" class="hover:text-color-secondary ease-in duration-200">Recursos</a></li>
        <li><a href="#testimonail" class="hover:text-color-secondary ease-in duration-200">Testemunho</a></li>
        <li><a href="#price" class="hover:text-color-secondary ease-in duration-200">Preço</a></li>
        <li><a href="#blog" class="hover:text-color-secondary ease-in duration-200">Notícias</a></li>
        <li><a href="#contact" class="hover:text-color-secondary ease-in duration-200">Contacto</a></li>
        <li>
          <UIButton> Teste Grátis </UIButton>
        </li>
      </ul>
      <button
        @click="toggleMenu()"
        class="lg:hidden hover:text-color-secondary ease-in duration-200"
      >
        <i :class="icon"></i>
      </button>
    </div>
    <!-- Mobile menu -->
    <div
      v-show="showMenu"
      class="bg-color-primary-dark rounded-md py-6 ease-in-out duration-200"
      id="menu-content"
    >
      <ul class="text-center space-y-6">
        <li>
          <a href="#home" class="hover:text-color-secondary ease-in duration-200">Início</a>
        </li>
        <li><a href="#features" class="hover:text-color-secondary ease-in duration-200">Recursos</a></li>
        <li><a href="#testimonail" class="hover:text-color-secondary ease-in duration-200">Testemunho</a></li>
        <li><a href="#price" class="hover:text-color-secondary ease-in duration-200">Preço</a></li>
        <li><a href="#blog" class="hover:text-color-secondary ease-in duration-200">Notícias</a></li>
        <li><a href="#contact" class="hover:text-color-secondary ease-in duration-200">Contacto</a></li>
        <li>
          <UIButton> Teste Grátis </UIButton>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import UIButton from "@/components/UIButton.vue";
export default {
  name: "AppMenu",
  components: {
    UIButton,
  },
  data() {
    return {
      showMenu: false,
      icon: "bi bi-list text-2xl",
    };
  },
  methods: {
    toggleMenu() {
      if (!this.showMenu) {
        this.icon = "bi bi-x-lg text-2xl";
      } else {
        this.icon = "bi bi-list text-2xl";
      }
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style scoped></style>
