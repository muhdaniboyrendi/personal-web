<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import ModeToggle from "./ModeToggle.vue";
import NavLink from "./NavLink.vue";

const route = useRoute();

const getNavLinkClass = (routePath) =>
  route.path === routePath || route.path.startsWith(`${routePath}/`)
    ? "bg-sky-500 bg-opacity-80"
    : "bg-gray-800 dark:bg-slate-300";

const hamburger = ref(null);
const hamburgerTop = ref(null);
const hamburgerMid = ref(null);
const hamburgerBottom = ref(null);

const hamburgerMenu = () => {
  hamburger.value.classList.toggle("hidden");
  hamburgerTop.value.classList.toggle("rotate-45");
  hamburgerBottom.value.classList.toggle("-rotate-45");
  hamburgerMid.value.classList.toggle("w-0");
  hamburgerMid.value.classList.toggle("w-4");
};
</script>

<template>
  <nav
    class="bg-secondary_light bg-opacity-50 backdrop-blur-xl border-b border-b-border_light dark:bg-secondary_dark dark:bg-opacity-50 dark:backdrop-blur-xl dark:border-b-border_dark fixed w-full z-20 top-0 start-0 transition-colors"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <RouterLink to="/" class="text-white"> EA Dev </RouterLink>
      <!-- <ModeToggle /> -->
      <button
        @click="hamburgerMenu"
        data-collapse-toggle="navbar-default"
        type="button"
        class="block items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none dark:text-gray-400"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span
          ref="hamburgerTop"
          class="border-t-2 border-slate-400 w-6 block transition-all origin-top-left"
        ></span>
        <span
          ref="hamburgerMid"
          class="border-t border-b border-slate-400 w-4 block my-[0.4rem]"
        ></span>
        <span
          ref="hamburgerBottom"
          class="border-b-2 border-slate-400 w-6 block transition-all origin-bottom-left"
        ></span>
      </button>

      <div
        ref="hamburger"
        class="hidden w-full md:flex md:w-auto"
        id="navbar-default"
      >
        <div class="flex justify-center gap-3 mt-3">
          <RouterLink
            to="/"
            class="flex items-center w-1/2 max-w-52 text-center bg-gray-500 bg-opacity-20 p-3 rounded-full hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-500 transition md:p-0 md:dark:hover:text-sky-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            <div
              class="flex justify-center items-center w-10 h-10 mr-2 rounded-full bg-opacity-20"
              :class="getNavLinkClass('/')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-house-door-fill text-white"
                viewBox="0 0 16 16"
              >
                <path
                  d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"
                />
              </svg>
            </div>
            <span class="mt-1">Home</span>
          </RouterLink>
          <RouterLink
            to="/about"
            class="flex items-center w-1/2 max-w-52 text-center bg-gray-500 bg-opacity-20 p-3 rounded-full hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-500 transition md:p-0 md:dark:hover:text-sky-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            <div
              class="flex justify-center items-center w-10 h-10 mr-2 rounded-full bg-opacity-20"
              :class="getNavLinkClass('/about')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-info-circle-fill text-white"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
                />
              </svg>
            </div>
            <span class="mt-1">About</span>
          </RouterLink>
        </div>
        <div
          class="p-5 bg-gray-500 bg-opacity-20 rounded-[2rem] flex items-center mt-3"
        >
          <RouterLink
            to="/projects"
            class="w-1/3 flex flex-wrap justify-center"
          >
            <div
              class="flex justify-center items-center w-10 h-10 rounded-full bg-opacity-20"
              :class="getNavLinkClass('/projects')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-kanban text-white"
                viewBox="0 0 16 16"
              >
                <path
                  d="M13.5 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm-11-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
                />
                <path
                  d="M6.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm-4 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm8 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"
                />
              </svg>
            </div>
            <span class="w-full text-center mt-2">Projects</span>
          </RouterLink>
          <RouterLink
            to="/equipments"
            class="w-1/3 flex flex-wrap justify-center"
          >
            <div
              class="flex justify-center items-center w-10 h-10 rounded-full bg-opacity-20"
              :class="getNavLinkClass('/equipments')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-tools text-white"
                viewBox="0 0 16 16"
              >
                <path
                  d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"
                />
              </svg>
            </div>
            <span class="w-full text-center mt-2">Equipments</span>
          </RouterLink>
          <RouterLink to="/contact" class="w-1/3 flex flex-wrap justify-center">
            <div
              class="flex justify-center items-center w-10 h-10 rounded-full bg-opacity-20"
              :class="getNavLinkClass('/contact')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-person-rolodex text-white"
                viewBox="0 0 16 16"
              >
                <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                <path
                  d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1z"
                />
              </svg>
            </div>
            <span class="w-full text-center mt-2">Contact</span>
          </RouterLink>
        </div>
        <!-- <ul class="font-medium flex flex-col mt-4 text-center md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0"> -->
        <!-- <NavLink title="Home" url="/" :active="getNavLinkClass('/')" />
          <NavLink title="About" url="/about" :active="getNavLinkClass('/about')" />
          <NavLink title="Projects" url="/projects" :active="getNavLinkClass('/projects')" />
          <NavLink title="Equipments" url="/equipments" :active="getNavLinkClass('/equipments')" />
          <NavLink title="Contact" url="/contact" :active="getNavLinkClass('/contact')" /> -->
        <!-- </ul> -->
        <div
          class="p-5 mt-3 bg-gray-500 bg-opacity-20 rounded-full flex justify-between"
        >
          <span class="ml-2 pt-1">Dark Mode</span>
          <ModeToggle class="md:ml-20" />
        </div>
      </div>
    </div>
  </nav>
</template>
