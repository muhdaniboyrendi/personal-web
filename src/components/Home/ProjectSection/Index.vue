<script setup>
import { useRouter } from "vue-router";
import { useProjectStore } from "@/stores/projectStore";
import ProjectCard from "./ProjectCard.vue";

const publicPath = import.meta.env.BASE_URL;
const router = useRouter();
const projectStore = useProjectStore();

const goToDetail = (project) => {
  projectStore.setSelectedProject(project);
  router.push({
    name: "project-details",
    params: { id: project.id },
  });
};

const imagePath = `${publicPath}img/`;
</script>

<template>
  <section class="flex flex-wrap pt-20 px-4 mx-auto max-w-screen-xl">
    <div class="w-full">
      <h2
        class="font-bold text-2xl md:text-3xl lg:text-4xl text-text_primary_light dark:text-text_primary_dark mb-5"
      >
        Projects
      </h2>
      <h3
        class="font-semibold text-md md:text-lg lg:text-xl italic text-text_secondary_light dark:text-text_secondary_dark mb-5"
      >
        Latest project...
      </h3>
    </div>

    <div class="w-full">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          :image-path="imagePath"
          :project-id="projectStore.projects[0]"
          :project-img="projectStore.projects[0].img"
          :project-title="projectStore.projects[0].title"
          :project-description="projectStore.projects[0].description"
        />
        <ProjectCard
          :image-path="imagePath"
          :project-id="projectStore.projects[1]"
          :project-img="projectStore.projects[1].img"
          :project-title="projectStore.projects[1].title"
          :project-description="projectStore.projects[1].description"
        />
        <ProjectCard
          :image-path="imagePath"
          :project-id="projectStore.projects[2]"
          :project-img="projectStore.projects[2].img"
          :project-title="projectStore.projects[2].title"
          :project-description="projectStore.projects[2].description"
        />
      </div>
    </div>
  </section>
</template>
