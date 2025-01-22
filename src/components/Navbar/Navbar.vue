<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import ModeToggle from "./ModeToggle.vue";
import NavLink from "./NavLink.vue";
import MobileNavLink from "./MobileNavLink.vue";

const route = useRoute();

const getNavLinkClass = (routePath) =>
  route.path === routePath || route.path.startsWith(`${routePath}/`)
    ? "text-sky-500"
    : "text-text_primary_light dark:text-text_primary_dark";

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
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6 py-3 md:py-0"
    >
      <RouterLink
        to="/"
        class="font-bold text-text_primary_light dark:text-text_primary_dark"
      >
        EA Dev
      </RouterLink>

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
        <MobileNavLink />
        <ul
          class="hidden font-medium md:flex text-center md:space-x-8 rtl:space-x-reverse md:mt-0"
        >
          <NavLink title="Home" url="/" :active="getNavLinkClass('/')" />
          <NavLink
            title="About"
            url="/about"
            :active="getNavLinkClass('/about')"
          />
          <NavLink
            title="Projects"
            url="/projects"
            :active="getNavLinkClass('/projects')"
          />
          <NavLink
            title="Equipments"
            url="/equipments"
            :active="getNavLinkClass('/equipments')"
          />
          <NavLink
            title="Contact"
            url="/contact"
            :active="getNavLinkClass('/contact')"
          />
        </ul>
        <div class="hidden md:flex items-center ml-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-brightness-high text-slate-700 dark:text-slate-300"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"
            />
          </svg>
          <ModeToggle class="mx-2" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-moon text-slate-700 dark:text-slate-300"
            viewBox="0 0 16 16"
          >
            <path
              d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"
            />
          </svg>
        </div>
      </div>
    </div>
  </nav>
</template>
