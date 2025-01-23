<script setup>
import { useProjectStore } from "@/stores/projectStore";
import ProjectCard from "./ProjectCard.vue";

const projectStore = useProjectStore();
</script>

<template>
  <section class="flex flex-wrap pt-20 px-4 mx-auto max-w-screen-xl">
    <div class="w-full">
      <h2
        class="font-bold text-xl md:text-2xl lg:text-3xl text-text_primary_light dark:text-text_primary_dark mb-5"
      >
        Projects
      </h2>
      <h3
        class="font-semibold italic text-text_secondary_light dark:text-text_secondary_dark mb-5"
      >
        Latest project...
      </h3>
    </div>

    <div class="w-full">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          :project-id="projectStore.projects[0]"
          :project-img="projectStore.projects[0].img"
          :project-title="projectStore.projects[0].title"
          :project-description="projectStore.projects[0].description"
        />
        <ProjectCard
          :project-id="projectStore.projects[1]"
          :project-img="projectStore.projects[1].img"
          :project-title="projectStore.projects[1].title"
          :project-description="projectStore.projects[1].description"
        />
        <ProjectCard
          :project-id="projectStore.projects[2]"
          :project-img="projectStore.projects[2].img"
          :project-title="projectStore.projects[2].title"
          :project-description="projectStore.projects[2].description"
        />
      </div>
    </div>

    <div class="w-full mt-6 flex justify-center">
      <RouterLink to="/projects" class="w-full flex justify-center items-center px-5 py-2 font-bold bg-gradient-to-b from-surface_light to-secondary_light shadow-md text-text_primary_light rounded-full ease-in hover:shadow-lg dark:from-surface_dark dark:to-secondary_dark dark:text-text_primary_dark transition border border-border_light hover:border-gray-300 dark:border-border_dark dark:hover:border-gray-500">
        <i class="bi bi-box-arrow-up-right mr-2"></i>
        View all projects
      </RouterLink>
    </div>
  </section>
</template>
