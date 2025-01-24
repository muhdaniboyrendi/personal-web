<script setup>
import { useProjectStore } from "@/stores/projectStore";
import { useRouter } from "vue-router";

const router = useRouter();
const projectStore = useProjectStore();

const props = defineProps([
  "projectId",
  "projectImg",
  "projectTitle",
  "projectDescription",
]);

const publicPath = import.meta.env.BASE_URL;
const imagePath = `${publicPath}img/`;

const goToDetail = (project) => {
  projectStore.setSelectedProject(project);
  router.push({
    name: "project-details",
    params: { id: project.id },
  });
};
</script>

<template>
  <div class="w-full">
    <div
      class="rounded-[2rem] p-4 bg-gradient-to-b from-surface_light to bg-secondary_light dark:from-surface_dark dark:to-secondary_dark shadow-md hover:shadow-lg overflow-hidden transition duration-500 group"
    >
      <div class="rounded-2xl overflow-hidden">
        <img
          :src="imagePath + '/' + props.projectImg"
          alt="Project"
          class="group-hover:scale-105 group-hover:blur-sm transition duration-500"
        />
      </div>
      <div class="mt-4">
        <h5
          class="mb-2 text-base md:text-lg font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ props.projectTitle }}
        </h5>
        <p
          class="mb-5 font-light text-sm text-gray-700 dark:text-gray-400 line-clamp-2"
        >
          {{ props.projectDescription }}
        </p>
        <div
          class="overflow-hidden flex w-full items-center h-10 p-1 bg-slate-300 dark:bg-gray-800 rounded-full group"
        >
          <button
            @click="goToDetail(props.projectId)"
            class="button-card px-3 h-8 rounded-full bg-secondary_light dark:bg-secondary_dark text-primary_light dark:text-primary_dark flex justify-center items-center group-hover:btn-shadow transition"
          >
            Read more...
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
