<script setup>
const props = defineProps(['url', 'svg'])
</script>

<template>
  <li class="mr-4 md:mr-5">
    <a class="text-slate-500 dark:text-slate-400" :href="props.url" v-html="props.svg"></a>
  </li>
</template>