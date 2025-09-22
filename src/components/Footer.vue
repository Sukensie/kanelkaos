<template>
    <footer>
      <div class="text-left m-auto py-8 flex flex-col lg:flex-row lg:justify-between lg:items-center lg:text-base lg:py-4 max-w-7xl px-6 text-gray-700">
          <div class="flex flex-col">
            <img src="../assets/kanelkaos-logo-text.svg" alt="Kanelkaos logo" class="w-1/2 max-w-[140px] md:max-w-[200px] lg:max-w-[400px]"/>
            <small class="text-gray-400 font-semibold">{{year}} Kanelkaos. All rights reserved</small>
          </div>
          
          <div class="flex flex-col pt-4 lg:pt-0">
            <strong>Company Information</strong>
            <small class="font-semibold text-gray-400">
              Campusvej 1, 5230 Odense M<br>
              <!--CVR: XXXXXX<br>-->
              <a href="mailto:kanelkaos@gmail.com">kanelkaos@gmail.com</a>
            </small>
          </div>
      </div>
     
    </footer>
</template>

<script setup>
  const year = new Date().getFullYear();
</script>