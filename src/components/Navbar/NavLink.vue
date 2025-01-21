<script setup>
const props = defineProps([
  'title',
  'url',
  'active'
])

</script>

<template>
  <li class="py-3">
    <RouterLink :to="props.url" class="md:border-b-2 md:border-transparent md:hover:border-sky-500 md:hover:text-sky-500 transition md:py-3" :class="props.active">{{ props.title }}</RouterLink>
  </li>
</template>