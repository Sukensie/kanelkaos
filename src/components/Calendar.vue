<template>
  <div class="bg-white p-2 w-full max-w-[500px] rounded-2xl">
    <div class="calendly-inline-widget !rounded-2xl" data-url="https://calendly.com/kanelkaos/30min?primary_color=5D894C&hide_event_type_details=1" style="min-width:320px;height:600px;"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://assets.calendly.com/assets/external/widget.js';
  script.async = true;
  document.head.appendChild(script);
});
</script>