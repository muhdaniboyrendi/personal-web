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
  <section class="flex flex-wrap py-28 px-4 mx-auto max-w-screen-xl">

    <div class="w-full mb-10">
      <h2 class="font-bold text-4xl text-sky-500 mb-10">Projects</h2>
      <h3 class="font-semibold text-xl dark:text-slate-200 mb-5">Some laetst projects I have worked on</h3>
      <RouterLink to="/projects" class="text-slate-900 dark:text-slate-300 hover:text-sky-500 hover:underline dark:hover:text-sky-500">View All Projects &raquo;</RouterLink>
    </div>

    <div class="w-full">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div class="w-full">
          <div class="bg-white border border-gray-200 rounded-[2rem] p-4 shadow-md dark:bg-black dark:border-gray-700 dark:hover:shadow-slate-700 overflow-hidden hover:scale-[99%] transition duration-500 group">
            <div class="rounded-2xl overflow-hidden">
              <img :src="imagePaths+ '/' +projectStore.projects[0].img" alt="Project" class="group-hover:scale-110 transition duration-500" />
            </div>
            <div class="mt-4">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{ projectStore.projects[0].title }}</h5>
              <p class="mb-5 font-light text-md text-gray-700 dark:text-gray-400">{{ projectStore.projects[0].description }}</p>
              <button @click="goToDetail(projectStore.projects[0])" class="inline-flex items-center px-5 py-2 text-sm font-medium text-sky-500 border-2 border-sky-500 rounded-full transition ease-in hover:bg-sky-500 hover:text-white hover:shadow-md hover:shadow-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-black dark:hover:bg-sky-500 dark:focus:ring-blue-800">
                Read more
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="w-full">
          <div class="bg-white border p-4 border-gray-200 rounded-[2rem] shadow-md dark:bg-black dark:border-gray-700 dark:hover:shadow-slate-700 overflow-hidden hover:scale-[99%] transition duration-500 group">
            <div class="rounded-2xl overflow-hidden">
              <img :src="imagePaths+ '/' +projectStore.projects[1].img" alt="Project" class="group-hover:scale-110 transition duration-500" />
            </div>
            <div class="mt-4">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{ projectStore.projects[1].title }}</h5>
              <p class="mb-5 font-light text-gray-700 dark:text-gray-400">{{ projectStore.projects[1].description }}</p>
              <button @click="goToDetail(projectStore.projects[1])" class="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-sky-500 border-2 border-sky-500 rounded-full transition ease-in hover:bg-sky-500 hover:text-white hover:shadow-md hover:shadow-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-black dark:hover:bg-sky-500 dark:focus:ring-blue-800">
                Read more
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="w-full">
          <div class="bg-white p-4 border border-gray-200 rounded-[2rem] shadow-md dark:bg-black dark:border-gray-700 dark:hover:shadow-slate-700 overflow-hidden hover:scale-[99%] transition duration-500 group">
            <div class="rounded-2xl overflow-hidden">
              <img :src="imagePaths+ '/' +projectStore.projects[2].img" alt="Project" class="group-hover:scale-110 transition duration-500" />
            </div>
            <div class="mt-4">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{ projectStore.projects[2].title }}</h5>
              <p class="mb-5 font-light text-gray-700 dark:text-gray-400">{{ projectStore.projects[2].description }}</p>
              <button @click="goToDetail(projectStore.projects[2])" class="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-sky-500 border-2 border-sky-500 rounded-full transition ease-in hover:bg-sky-500 hover:text-white hover:shadow-md hover:shadow-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-black dark:hover:bg-sky-500 dark:focus:ring-blue-800">
                Read more
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>

  </section>
</template>