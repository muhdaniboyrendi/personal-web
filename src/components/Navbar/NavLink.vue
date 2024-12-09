<script setup>
const props = defineProps([
  'title',
  'url',
  'active'
])

</script>

<template>
  <li>
    <RouterLink :to="props.url" class="block py-3 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-500 transition md:p-0 md:dark:hover:text-sky-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" :class="props.active">{{ props.title }}</RouterLink>
  </li>
</template>