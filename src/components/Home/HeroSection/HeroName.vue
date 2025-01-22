<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "I'm Muhdani Boyrendi Erlan Azhari",
  },
  speed: {
    type: Number,
    default: 100,
  },
});

const displayText = ref("");
const isTyping = ref(false);

const typeText = async () => {
  isTyping.value = true;
  displayText.value = "";

  for (let i = 0; i < props.text.length; i++) {
    await new Promise((resolve) => setTimeout(resolve, props.speed));
    displayText.value += props.text[i];
  }

  isTyping.value = false;
};

onMounted(() => {
  typeText();
});
</script>

<template>
  <h1
    class="mb-4 text-2xl font-extrabold tracking-tight leading-none text-text_primary_light md:text-3xl lg:text-4xl dark:text-text_primary_dark"
  >
    Hi there,
  </h1>
  <h1
    class="mb-4 text-4xl font-bold tracking-tight leading-none bg-gradient-to-r from-accent via-primary_light to-primary_light dark:via-primary_dark dark:to-primary_dark text-transparent bg-clip-text md:text-5xl"
  >
    {{ displayText }}
    <span
      v-if="isTyping"
      class="inline-block w-[2px] h-[1em] bg-text_primary_light dark:bg-text_primary_dark ml-1 animate-blink"
    ></span>
  </h1>
</template>

<style scoped>
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.animate-blink {
  animation: blink 1s infinite;
}
</style>
