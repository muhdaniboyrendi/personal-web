<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useProjectStore } from '@/stores/projectStore'

const publicPath = import.meta.env.BASE_URL
const route = useRoute()
const projectStore = useProjectStore()

const currentProject = computed(
  () =>
    projectStore.selectedProject ||
    projectStore.getProjectById(route.params.id),
)

const imagePaths = `${publicPath}img/`
const sourceCode = currentProject.value.source
const liveDemo = currentProject.value.link
</script>

<template>
  <main class="px-3 pt-24 md:mb-20 min-h-screen flex flex-wrap justify-center">
    <div class="container max-w-xl">
      <img :src="imagePaths + '/' + currentProject.img" alt="project" class="w-full mb-8 rounded-[2rem]" />
      <h2 class="text-text_primary_light dark:text-text_primary_dark font-semibold text-lg md:text-xl lg:text-2xl mb-5">{{ currentProject.title }}</h2>
      <p class="text-text_secondary_light dark:text-text_secondary_dark text-sm mb-8">{{ currentProject.description }}</p>
      <div class="link text-sm flex mb-8">
        <a :href="sourceCode" target="_blank" class="text-text_primary_light dark:text-text_primary_dark mr-10 flex items-center hover:text-sky-500 hover:underline dark:hover:text-sky-500 trasnition" v-if="currentProject.source != '#'">
          <i class="bi bi-github scale-125 mr-2"></i>
          Source Code
        </a>
        <a :href="liveDemo" target="_blank" class="text-text_primary_light dark:text-text_primary_dark mr-10 flex items-center hover:text-sky-500 hover:underline dark:hover:text-sky-500 trasnition" v-if="currentProject.link != '#'">
          <i class="bi bi-box-arrow-up-right scale-125 mr-2"></i>
          Live Demo
        </a>
      </div>
      <span class="text-text_primary_light dark:text-text_primary_dark mb-2 block">Stack :</span>
      <ul class="mb-10">
        <li v-for="(tech, index) in currentProject.tech" :key="index" class="text-text_secondary_light dark:text-text_secondary_dark text-sm mb-1">
          - {{ tech }}
        </li>
      </ul>
    </div>
  </main>
</template>