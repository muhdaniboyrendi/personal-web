<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue';
import { computed } from 'vue'
import ModeToggle from './ModeToggle.vue'
import NavLink from './NavLink.vue'

const route = useRoute()

const getNavLinkClass = (routePath) => route.path === routePath || route.path.startsWith(`${routePath}/`) ? 'text-sky-500' : 'text-gray-900 dark:text-slate-300'

const hamburger = ref(null);
const hamburgerTop = ref(null)
const hamburgerMid = ref(null)
const hamburgerBottom = ref(null)

const hamburgerMenu = () => {
  hamburger.value.classList.toggle('hidden')
  hamburgerTop.value.classList.toggle('rotate-45')
  hamburgerBottom.value.classList.toggle('-rotate-45')
  hamburgerMid.value.classList.toggle('w-0')
  hamburgerMid.value.classList.toggle('w-4')
}
</script>

<template>
  <nav class="bg-white bg-opacity-70 backdrop-blur-lg border-b border-b-slate-400 dark:bg-black dark:bg-opacity-70 dark:backdrop-blur-md dark:border-b-slate-700 fixed w-full z-20 top-0 start-0">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      
      <ModeToggle />
      <button @click="hamburgerMenu" data-collapse-toggle="navbar-default" type="button" class="block items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none dark:text-gray-400" aria-controls="navbar-default" aria-expanded="false">
        <span ref="hamburgerTop" class="border-b-2 border-slate-400 w-6 block transition-all origin-top-left"></span>
        <span ref="hamburgerMid" class="border-b-2 border-slate-400 w-4 block my-[0.38rem]"></span>
        <span ref="hamburgerBottom" class="border-b-2 border-slate-400 w-6 block transition-all origin-bottom-left"></span>
      </button>
      
      <div ref="hamburger" class="hidden w-full md:block md:w-auto transition" id="navbar-default">
        <ul class="font-medium flex flex-col mt-4 text-center md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
          <NavLink title="Home" url="/" :active="getNavLinkClass('/')" />
          <NavLink title="About" url="/about" :active="getNavLinkClass('/about')" />
          <NavLink title="Projects" url="/projects" :active="getNavLinkClass('/projects')" />
          <NavLink title="Equipments" url="/equipments" :active="getNavLinkClass('/equipments')" />
          <NavLink title="Contact" url="/contact" :active="getNavLinkClass('/contact')" />
        </ul>
      </div>
      
    </div>
  </nav>
</template>