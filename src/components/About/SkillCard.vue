<script setup>
const props = defineProps(["title", "data"]);
</script>

<template>
  <div
    class="p-5 rounded-[2rem] shadow-md bg-gradient-to-b from-surface_light to-secondary_light dark:from-surface_dark dark:to-secondary_dark hover:shadow-lg transition duration-500"
  >
    <h4
      class="text-text_primary_light dark:text-text_primary_dark text-base md:text-lg font-bold"
    >
      {{ props.title }}
    </h4>

    <div class="mt-5 text-sm text-text_secondary_light dark:text-text_secondary_dark">
      <ul>
        <li v-for="(item, index) in props.data" :key="index" class="mb-1">- {{ item }}</li>
      </ul>
    </div>
  </div>
</template>
