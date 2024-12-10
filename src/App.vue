<script setup>
import { RouterView, useRoute } from 'vue-router'
import { watchEffect } from 'vue';
import Navbar from './components/Navbar/Navbar.vue'
import Footer from './components/Footer/Footer.vue'

const route = useRoute();

watchEffect(() => {
  const defaultTitle = 'Muhdani Boyrendi Erlan Azhari';
  document.title = route.meta.title || defaultTitle;
});
</script>

<template>
  <Navbar />
  <main class="px-2 md:px-4">
    <RouterView />
  </main>
    <Footer />
</template>
