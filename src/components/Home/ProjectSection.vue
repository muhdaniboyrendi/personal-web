<script setup>
import ProjectCard from '../Projects/ProjectCard.vue';
</script>

<template>
  <section>
    <div class="flex flex-wrap pt-36 pb-20 px-4 mx-auto max-w-screen-xl lg:pt-36 lg:pb-20">

      <div class="w-full mb-9">
        <h2 class="font-bold text-4xl text-sky-500">Projects</h2>
        <h3 class="font-semibold text-xl mt-4 dark:text-slate-200">Some laetst projects I have worked on</h3>
      </div>

      <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>

    </div>
  </section>
</template>