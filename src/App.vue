<script setup>
import Navbar from './components/Navbar.vue';
import Separator from './components/Separator.vue';
import Calendar from './components/Calendar.vue';
import Hero from './components/Hero.vue';
import Card from './components/Card.vue';
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';

const year = new Date().getFullYear(); 

</script>

<template>
  <div class="text-lg">
    <Header></Header>

    <main class="text-center flex flex-col w-full">
      <Hero />  

      <section class="flex flex-col items-center py-16 px-4 bg-kk-green text-white">
        <h2 class="text-3xl sm:text-4xl font-bold text-center mb-8">
          Partner with Us & Ignite the Party
        </h2>

        <p class="text-center text-lg max-w-4xl mb-8">
          Ready to add a blast of fun to your shelves? Kanelkaos offers a unique and viral-worthy product that's a guaranteed hit for every Danish 25th birthday celebration. As the first and only brand to offer these ready-to-use cinnamon cannons, we're not just selling a product—we're selling an unforgettable moment.
        </p>

        <div class="flex justify-center gap-8 p-8">
          <Card
            title="Attract New Customers"
            description="Our unique product is a powerful magnet for party planners and friends looking for a fun and creative birthday surprise."
            alt="Lightning Icon"
            icon="bolt"
          />

          <Card
            title="Get on Our Map"
            description="We'll feature your store on our website's interactive map and promote you across our social media channels to our growing audience."
            alt="Lightning Icon"
            icon="map"
          />

          <Card
            title="Join the Kanelkaos Revolution"
            description="Selling Kanelkaos is more than just stocking a product; it's about being part of the next big tradition. We make it easy to get started and stand out."
            alt="Lightning Icon"
            icon="hands-clapping"
          />
        </div>

         <h2 class="text-3xl sm:text-4xl font-bold text-center mb-8 mt-16">
          Trusted by
        </h2>

        <div class="flex w-full gap-4 justify-center">
            <a v-for="n in 4" href="#" target="_blank" class="block">
              <img class="max-w-[150px] w-full opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out" src="./assets/sdu-ss-logo.svg" alt="logo-1" />
            </a>
          </div>
    </section>





      <!--https://cruip.com/create-an-infinite-horizontal-scroll-animation-with-tailwind-css/-->

      <!--<Separator color="#F4F0D7"/>-->
  

      <section class="bg-kk-beige p-4 text-left pb-[40px]">
          <div class="max-w-[90%] m-auto w-full flex flex-col items-center ">
            <h2 class="text-3xl sm:text-4xl font-bold text-center mb-4 mt-12">Ready to start?</h2>
              <p class="text-center text-lg max-w-3xl mb-12">
                Book a quick meeting with us below and let's discuss how we can partner up to bring the fun to your customers.
              </p>
            <Calendar />
        </div>
      </section>

      <!--<Separator color="white" />-->
      
    </main>

    <Footer></Footer>
    
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
