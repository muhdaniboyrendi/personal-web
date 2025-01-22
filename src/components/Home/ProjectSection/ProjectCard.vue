<script setup>
const props = defineProps(['imagePath', 'projectId', 'projectImg', 'projectTitle', 'projectDescription'])
</script>

<template>
  <div class="w-full">
    <div
      class="bg-white border border-border_light dark:border-border_dark rounded-[2rem] p-4 shadow-md shadow-gray-300 dark:shadow-gray-800 dark:bg-surface_dark overflow-hidden transition duration-500 group"
    >
      <div class="rounded-2xl overflow-hidden">
        <img
          :src="props.imagePath + '/' + props.projectImg"
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
