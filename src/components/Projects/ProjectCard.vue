<script setup>
const projectPhoto = '/img/projects/project.jpg'
</script>

<template>
  <div class="w-full mb-5 md:w-1/2 md:px-3 lg:w-1/3 lg:px-3">
    <div class="bg-white border border-gray-200 rounded-2xl shadow-md dark:bg-slate-800 dark:border-gray-700 overflow-hidden hover:scale-95 transition group">
      <img :src="projectPhoto" alt="Project" class="group-hover:scale-110 transition" />
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Grasius</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Student Management App dan attendance with QR Code</p>
        <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-sky-500 border-2 border-sky-500 rounded-lg transition ease-in hover:bg-sky-500 hover:text-white hover:shadow-md hover:shadow-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-slate-800 dark:hover:bg-sky-500 dark:focus:ring-blue-800">
          Read more
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>