<script setup>
import { ref, onMounted } from "vue";

const isDarkMode = ref(false);

const toggleButton = () => {
  isDarkMode.value = !isDarkMode.value;

  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
};

onMounted(() => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    isDarkMode.value = true;
    document.documentElement.classList.add("dark");
  } else {
    isDarkMode.value = false;
    document.documentElement.classList.add("light");
  }
});
</script>

<template>
  <label for="modeToggle" class="inline-flex items-center cursor-pointer">
    <input
      @click="toggleButton"
      type="checkbox"
      :checked="isDarkMode"
      id="modeToggle"
      class="sr-only peer"
    />
    <div
      class="relative w-9 h-5 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-sky-600"
    ></div>
    <span class="text-sm font-medium text-gray-900 dark:text-gray-300"></span>
  </label>
</template>
