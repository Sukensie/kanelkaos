<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true
  }
});

</script>

<template>
  <div class="flex-grow flex flex-col items-center text-center p-6 bg-kk-beige rounded-lg shadow-md max-w-xs transition-transform transform hover:scale-102">
    <div class="mb-8">
      <font-awesome-icon :icon=icon class="text-4xl text-kk-red"/>
    </div>
    <h3 class="text-xl font-semibold mb-2 text-kk-red">{{ title }}</h3>
    <p class="text-gray-600">{{ description }}</p>
  </div>
</template>