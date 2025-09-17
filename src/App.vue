<script setup>
import Navbar from './components/Navbar.vue';
import Separator from './components/Separator.vue';
import Calendar from './components/Calendar.vue';
import Hero from './components/Hero.vue';
import Card from './components/Card.vue';

const year = new Date().getFullYear(); 

</script>

<template>
  <div class="text-lg">
    <Navbar />
    <main class="text-center flex flex-col w-full">

      <Hero />

      <section class="bg-kk-green text-white pb-[40px] text-left">
        <div class="max-w-[90%] m-auto lg:max-w-[1600px]">
          <h2 class="font-bold text-2xl py-4">Want so sell Kanelkaos in your store</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

          <h2 class="font-bold text-2xl pt-8 pb-4">Cooperating with</h2>
          <div class="flex w-full gap-4">
            <a v-for="n in 4" href="#" target="_blank" class="block">
              <img class="max-w-[150px] w-full opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out" src="./assets/sdu-ss-logo.svg" alt="logo-1" />
            </a>
          </div>
        </div>
      </section>











      





      <div class="flex flex-col items-center py-16 px-4 bg-kk-green text-white">
        <h2 class="text-3xl sm:text-4xl font-bold text-center mb-12">
          Partner with Us & Ignite the Party
        </h2>

        <p class="text-center text-lg max-w-3xl mb-12">
          Ready to add a blast of fun to your shelves? Kanelkaos offers a unique and viral-worthy product that's a guaranteed hit for every Danish 25th birthday celebration. As the first and only brand to offer these ready-to-use cinnamon cannons, we're not just selling a product—we're selling an unforgettable moment.
        </p>


    </div>











    <div class="flex justify-center gap-8 p-8 bg-kk-green">
    <Card
      title="Attract New Customers"
      description="Our unique product is a powerful magnet for party planners and friends looking for a fun and creative birthday surprise."
      icon-path="M13 10V3L4 14h7v7l9-11h-7z"
    />

    <Card
      title="Get on Our Map"
      description="We'll feature your store on our website's interactive map and promote you across our social media channels to our growing audience."
      icon-path="M9 20l-5-5m0 0l5-5m-5 5h12a2 2 0 012 2v2m-6-4v4m0 0h6m0 0l-3-3m3 3L17 17"
    />

    <Card
      title="Join the Kanelkaos Revolution"
      description="Selling Kanelkaos is more than just stocking a product; it's about being part of the next big tradition. We make it easy to get started and stand out."
      icon-path="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </div>

















      <!--https://cruip.com/create-an-infinite-horizontal-scroll-animation-with-tailwind-css/-->

      <!--<Separator color="#F4F0D7"/>-->
  

      <section class="bg-kk-beige p-4 text-left pb-[40px]">
          <div class="max-w-[90%] m-auto w-full flex flex-col items-center ">
            <h2 class="text-3xl sm:text-4xl font-bold text-center mb-12">Ready to start?</h2>
              <p class="text-center text-lg max-w-3xl mb-12">
Book a quick meeting with us below and let's discuss how we can partner up to bring the fun to your customers.</p>
            <Calendar />
        </div>
      </section>

      <!--<Separator color="white" />-->
      
    </main>

    <footer>
      <div class="text-left max-w-[90%] m-auto py-8 flex flex-col lg:flex-row lg:justify-between lg:items-center lg:text-base lg:py-4 lg:max-w-[1600px]">
          <div class="flex flex-col">
            <img src="./assets/kanelkaos-logo-text.svg" alt="Kanelkaos logo" class="w-1/2 max-w-[200px] lg:max-w-[400px]"/>
            <small class="text-kk-grey font-semibold">{{year}} Kanelkaos. All rights reserved</small>
          </div>
          
          <div class="flex flex-col pt-4 lg:pt-0">
            <strong>Company Information</strong>
            <small class="font-semibold text-kk-grey">
              Campusvej 1<br>
              CVR: XXXXXX<br>
              sales@Kanelkaos.dk
            </small>
          </div>
      </div>
     
    </footer>
    
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
