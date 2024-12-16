<script setup>
import { useRouter } from 'vue-router'
import { useProjectStore } from '@/stores/projectStore'
import ProjectCard from './ProjectCard.vue';

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
  <section class="pt-20 py-28">
    <div class="flex flex-wrap py-4 mx-auto max-w-screen-xl lg:py-4">

      <div class="w-full mb-10">
        <h2 class="font-bold text-4xl text-sky-500">Projects</h2>
        <h3 class="font-semibold text-xl mt-16 text-slate-500 dark:text-slate-300">Some projects I have worked on</h3>
      </div>

      <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard />
      </div>

    </div>
  </section>
</template>