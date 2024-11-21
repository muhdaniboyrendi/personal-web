<script setup>
import ProjectCard from '../Projects/ProjectCard.vue';
</script>

<template>
  <section class="bg-white dark:bg-slate-900">
    <div class="flex flex-wrap pt-36 pb-20 px-4 mx-auto max-w-screen-xl lg:pt-36 lg:pb-20">

      <div class="w-full mb-9">
        <h2 class="font-bold text-4xl text-sky-500">Projects</h2>
        <h3 class="font-semibold text-xl mt-4 dark:text-slate-200">Some laetst projects I have worked on</h3>
      </div>

      <ProjectCard />
      <ProjectCard />
      <ProjectCard />

    </div>
  </section>
</template>