<script setup>
import ProjectCard from './ProjectCard.vue';
</script>

<template>
  <section class="pt-20 py-28">
    <div class="flex flex-wrap py-4 mx-auto max-w-screen-xl lg:py-4">

      <div class="w-full mb-10">
        <h2 class="font-bold text-4xl text-black dark:text-white">About</h2>
        <h3 class="font-semibold text-xl mt-16 text-slate-500 dark:text-slate-300">Some projects I have worked on</h3>
      </div>

      <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>

    </div>
  </section>
</template>