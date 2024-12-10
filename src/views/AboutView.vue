<script setup>
import Education from '@/components/About/Education.vue';
import Experiences from '@/components/About/Experiences.vue';
import MainAbout from '@/components/About/MainAbout.vue';
import Skills from '@/components/About/Skills.vue';
</script>

<template>
  <div class="px-2 md:px-4">
    <MainAbout />
    <Skills />
    <Experiences />
    <Education />
  </div>
</template>
