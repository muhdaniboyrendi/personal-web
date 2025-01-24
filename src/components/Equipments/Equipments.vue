<script setup>
import EquipmentCard from './EquipmentCard.vue';

</script>

<template>
  <section class="pt-20 py-28">
    <div class="flex flex-wrap py-4 mx-auto max-w-screen-xl lg:py-4">

      <div class="w-full mb-5">
        <h2 class="font-bold text-2xl md:text-3xl lg:text-4xl text-text_primary_light dark:text-text_primary_dark">Equipments</h2>
        <h3 class="font-semibold italic text-base md:text-lg mt-10 text-text_primary_light dark:text-text_primary_dark">Some of the equipment I use</h3>
      </div>

      <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <EquipmentCard />
      </div>

    </div>
  </section>
</template>