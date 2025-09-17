<template>
  <div class="flex-grow flex flex-col items-center text-center p-6 bg-kk-beige rounded-lg shadow-md max-w-xs transition-transform transform hover:scale-105">
    <div class="w-16 h-16 mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-full h-full text-red-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="iconPath" />
      </svg>
    </div>
    <h3 class="text-xl font-semibold mb-2 text-kk-red">{{ title }}</h3>
    <p class="text-gray-600">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'KanelkaosCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    iconPath: {
      type: String,
      required: true,
    },
  },
};
</script>