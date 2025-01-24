<script setup>
import { useProjectStore } from "@/stores/projectStore";
import ProjectCard from "@/components/Projects/ProjectCard.vue";

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
      <div
        class="overflow-hidden flex w-full justify-center items-center p-1 bg-slate-300 dark:bg-gray-800 rounded-full group"
      >
        <RouterLink
          to="/projects"
          class="button-card py-1.5 px-3 rounded-full bg-secondary_light dark:bg-secondary_dark text-primary_light dark:text-primary_dark flex justify-center items-center group-hover:btn-shadow transition duration-500"
        >
          <i class="bi bi-box-arrow-up-right mr-2"></i>
          View all projects
        </RouterLink>
      </div>
    </div>
  </section>
</template>
