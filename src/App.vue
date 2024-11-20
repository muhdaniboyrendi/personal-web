<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar/Navbar.vue'
</script>

<template>
  <Navbar />
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <RouterView />
</template>
