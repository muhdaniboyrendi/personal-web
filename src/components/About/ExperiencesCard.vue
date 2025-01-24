<template>
  <div class="w-full">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div
        class="p-5 rounded-[2rem] shadow-md hover:shadow-lg bg-gradient-to-b from-surface_light to-secondary_light dark:from-surface_dark dark:to-secondary_dark transition duration-500"
      >
        <div class="flex justify-between">
          <h3
            class="text-text_primary_light dark:text-text_primary_dark text-lg md:text-xl font-bold italic"
          >
            SoloNet
          </h3>
          <div
            class="py-0.5 px-3 bg-amber-100 border-amber-500 dark:bg-amber-950 rounded-full border dark:border-amber-400 h-fit"
          >
            <span class="text-sm text-amber-800 dark:text-amber-50">Past</span>
          </div>
        </div>

        <div class="my-5 text-sm">
          <p class="text-text_secondary_light dark:text-text_secondary_dark">
            Web Developer • Internship
          </p>
          <p
            class="text-text_secondary_light dark:text-text_secondary_dark my-4"
          >
            Develop a website using PHP Native dan CodeIgniter framework,
            presentation of work progress every week.
          </p>
          <p
            class="flex text-text_secondary_light dark:text-text_secondary_dark"
          >
            <i class="bi bi-geo-alt-fill mr-2 scale-110"></i>
            Surakarta, Indonesia
          </p>
        </div>

        <div
          class="overflow-hidden flex w-full items-center h-10 p-1 bg-slate-300 dark:bg-gray-800 rounded-full group"
        >
          <a
            href="https://www.solonet.net.id/"
            target="_blank"
            class="button-card px-3 h-8 rounded-full bg-secondary_light dark:bg-secondary_dark text-primary_light dark:text-primary_dark flex justify-center items-center group-hover:btn-shadow transition"
          >
            <i class="bi bi-box-arrow-up-right mr-2"></i>
            Visit
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
