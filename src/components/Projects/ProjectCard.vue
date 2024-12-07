<script setup>
import { useRouter } from 'vue-router'
import { useProjectStore } from '@/stores/projectStore'

const publicPath = import.meta.env.BASE_URL
const router = useRouter()
const projectStore = useProjectStore()

const goToDetail = (project) => {
  projectStore.setSelectedProject(project)
  router.push({
    name: 'project-details',
    params: { id: project.id }
  })
}

const imagePaths = `${publicPath}img/`
</script>

<template>
  <div class="w-full" v-for="project in projectStore.projects" :key="project.id">
    <div class="bg-white border border-gray-200 rounded-2xl shadow-md dark:bg-black dark:border-gray-700 dark:hover:shadow-slate-700 overflow-hidden hover:scale-95 transition group">
      <img :src="imagePaths+ '/' +project.img" alt="Project" class="group-hover:scale-110 transition" />
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ project.title }}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ project.description }}</p>
        <button @click="goToDetail(project)" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-sky-500 border-2 border-sky-500 rounded-lg transition ease-in hover:bg-sky-500 hover:text-white hover:shadow-md hover:shadow-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-black dark:hover:bg-sky-500 dark:focus:ring-blue-800">
          Read more
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>