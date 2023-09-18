<template>
  <footer class="bg-color-primary-dark pt-20 pb-10">
    <div class="container flex flex-wrap justify-between">
      <div class="w-full md:w-1/2 lg:w-[30%]">
        <h4 class="title font-bold pb-3 text-xl">
          Kumbu<span class="text-color-secondary">Trackr</span>
        </h4>
        <p class="leading-relaxed text-justify">
          KumbuTrackr é um aplicativo de controle e gestão financeira, voltado
          para empresas e/ou singulares. Trazendo todo o tipo de soluções para o mercado financeiro.
        </p>
        <ul class="flex gap-5">
            <li class="mt-3"><a href="#"><i class="bi bi-facebook text-2xl hover:text-color-secondary"></i></a></li>
            <li class="mt-3"><a href="#"><i class="bi bi-linkedin text-2xl hover:text-color-secondary"></i></a></li>
            <li class="mt-3"><a href="#"><i class="bi bi-instagram text-2xl hover:text-color-secondary"></i></a></li>
            <li class="mt-3"><a href="#"><i class="bi bi-twitter text-2xl hover:text-color-secondary"></i></a></li>
        </ul>
      </div>
      <div class="w-full md:w-auto">
        <h4 class="title font-bold pb-3 text-xl">
          Links Úteis
        </h4>
     <ul class="space-y-2">
         <li><a href="#home" class="underline hover:text-color-secondary">Página Inicial</a></li>
         <li><a href="#features" class="underline hover:text-color-secondary">Recursos</a></li>
         <li><a href="#testimonail" class="underline hover:text-color-secondary">Testemunho</a></li>
         <li><a href="#price" class="underline hover:text-color-secondary">Preços</a></li>
         <li><a href="#blog" class="underline hover:text-color-secondary">Blog</a></li>
         <li><a href="#contact" class="underline hover:text-color-secondary">Contacto</a></li>
     </ul>
      </div>
      <div class="w-full md:w-1/2 lg:w-[30%]">
        <h4 class="title font-bold pb-3 text-xl">
        Newsletter
        </h4>
        <p class="leading-relaxed text-justify">
         Subscreva a nossa newsletter e fique a par de todas as novidades.
        </p>
        <div class="flex mt-5">
            <input type="email" class=" rounded-l-md px-5" placeholder="Digite Seu E-mail">
            <button class="py-2 px-4 rounded-r-md bg-color-secondary"><i class="bi bi-send-fill text-2xl"></i></button>
        </div>
      </div>
      <hr class="w-full mt-10 pb-5 border-color-gray">
      <div class="w-full text-center">
        <p class="leading-relaxed">2023 &copy; KumbuTrackr. Todos os direitos reservados | Feito por <a href="https://github.com/NaorAlmeida" target="_blank" class="text-color-secondary">Naor de Almeida</a> </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

