<script setup>
import { useProjectStore } from '@/stores/projectStore';
import { useRouter } from 'vue-router';

const router = useRouter()
const projectStore = useProjectStore()

const props = defineProps(['projectId', 'projectImg', 'projectTitle', 'projectDescription'])

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
      class="bg-white rounded-[2rem] p-4 dark:bg-gradient-to-b dark:from-surface_dark dark:to-secondary_dark shadow-md hover:shadow-lg overflow-hidden transition duration-500 group"
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
          class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ props.projectTitle }}
        </h5>
        <p class="mb-5 font-light text-sm text-gray-700 dark:text-gray-400">
          {{ props.projectDescription }}
        </p>
        <button
          @click="goToDetail(props.projectId)"
          class="flex w-full justify-center items-center px-5 py-2 font-bold bg-primary_light text-surface_light border-2 border-primary_light rounded-full transition ease-in hover:bg-surface_light hover:text-primary_light dark:bg-primary_dark dark:border-primary_dark dark:hover:bg-surface_dark"
        >
          <i class="bi bi-box-arrow-up-right mr-2"></i>
          Read more
        </button>
      </div>
    </div>
  </div>
</template>
