<script setup>
import { useProjectStore } from "@/stores/projectStore";
import ProjectCard from "./ProjectCard.vue";

const projectStore = useProjectStore();
</script>

<template>
  <section class="pt-20">
    <div class="flex flex-wrap py-4 mx-auto max-w-screen-xl lg:py-4">
      <div class="w-full mb-5">
        <h2
          class="font-bold text-2xl md:text-3xl lg:text-4xl text-text_primary_light dark:text-text_primary_dark"
        >
          Projects
        </h2>
        <h3
          class="font-semibold text-lg italic mt-10 text-text_primary_light dark:text-text_primary_dark"
        >
          Some projects I have worked on
        </h3>
      </div>

      <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          v-for="project in projectStore.projects"
          :key="project.id"
          :project-id="project"
          :project-img="project.img"
          :project-title="project.title"
          :project-description="project.description"
        />
      </div>
    </div>
  </section>
</template>
