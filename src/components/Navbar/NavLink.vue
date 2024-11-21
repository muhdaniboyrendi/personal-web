<script setup>
const props = defineProps([
  'title',
  'url',
])
</script>

<template>
  <li>
    <RouterLink :to="props.url" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-500 transition md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{{ props.title }}</RouterLink>
  </li>
</template>