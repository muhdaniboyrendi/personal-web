<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar/Navbar.vue'
import Footer from './components/Footer/Footer.vue';
</script>

<template>
  <Navbar />
  <main class="px-2 md:px-4">
    <RouterView />
  </main>
    <Footer />
</template>
