<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const profesion = ["Web Developer", "Tech Enthusiast"];

const currentProfesion = ref(profesion[0]);
const currentIndex = ref(0);
const isMenuOpen = ref(false);

let profesionInterval;

const menuItems = [
  {
    icon: `<i class="bi bi-instagram"></i>`,
    label: "Instagram",
    link: "https://www.instagram.com/erlan.azr_?igsh=MTN3anUxNDZiZjA4MA==",
  },
  {
    icon: `<i class="bi bi-github"></i>`,
    label: "Github",
    link: "https://github.com/muhdaniboyrendi",
  },
  {
    icon: `<i class="bi bi-linkedin"></i>`,
    label: "Linkedin",
    link: "https://www.linkedin.com/in/muhdani-boyrendi/",
  },
  {
    icon: `<i class="bi bi-envelope-at-fill"></i>`,
    label: "Email",
    link: "mailto:boyrendierlan@gmailcom",
  },
  {
    icon: `<i class="bi bi-whatsapp"></i>`,
    label: "WhatsApp",
    link: "https://wa.me/+6282220633024",
  },
];

onMounted(() => {
  profesionInterval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % profesion.length;
    currentProfesion.value = profesion[currentIndex.value];
  }, 4000);
});

onUnmounted(() => {
  clearInterval(profesionInterval);
});
</script>

<template>
  <div
    class="relative flex items-center mx-auto lg:mx-0 py-1.5 px-3 mt-16 bg-slate-300 dark:bg-gray-800 rounded-full w-fit"
  >
    <button
      @click="isMenuOpen = !isMenuOpen"
      class="social-media-button bg-secondary_light dark:bg-secondary_dark w-8 h-8 text-sky-500 hover:text-accent transition rounded-full scale-125 mr-3"
    >
      <i class="bi bi-person-fill"></i>
    </button>

    <div
      class="flex gap-2 transition-all duration-300"
      :class="[
        isMenuOpen
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 -translate-x-4 pointer-events-none',
      ]"
    >
      <a
        v-for="(item, index) in menuItems"
        :key="index"
        :href="item.link"
        target="_blank"
        class="p-2 mt-1 text-sky-500 hover:text-accent rounded-full border-sky-500 transition scale-125"
        :title="item.label"
      >
        <span v-html="item.icon"></span>
      </a>
    </div>

    <transition
      mode="out-in"
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-500 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform translate-y-4 opacity-0"
    >
      <p
        v-if="!isMenuOpen"
        :key="currentIndex"
        class="absolute right-2 font-semibold text-lg text-sky-500 py-1.5 px-3 bg-secondary_light w-fit rounded-full dark:bg-secondary_dark dark:text-primary_dark dark:border-primary_dark"
      >
        {{ currentProfesion }}
      </p>
    </transition>
  </div>
</template>

<style scoped>
@keyframes shadow-pulse {
  0% {
    box-shadow: 0 0 0px 0px currentColor;
  }
  50% {
    box-shadow: 0 0 5px 2px currentColor;
  }
  100% {
    box-shadow: 0 0 0px 0px currentColor;
  }
}

.social-media-button {
  @apply text-[#4CB9E7];
  animation: shadow-pulse 2s ease-in-out infinite;
}

.social-media-button:hover {
  @apply text-[#FF9B50];
}
</style>
