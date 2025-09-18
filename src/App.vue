<script setup>
import Separator from './components/Separator.vue';
import Calendar from './components/Calendar.vue';
import Hero from './components/Hero.vue';
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';
import Testimonials from './components/Testimonials.vue';
import Partnerships from './components/Partnerships.vue';
import ScatteredBackground from './components/ScatterBackground.vue';

const year = new Date().getFullYear(); 

</script>

<template>
  <div class="text-lg">
    <Header></Header>

    <main class="text-center flex flex-col w-full">
      <Hero />  

    <Partnerships />


    <Testimonials />



      <!--https://cruip.com/create-an-infinite-horizontal-scroll-animation-with-tailwind-css/-->

      <!--<Separator color="#F4F0D7"/>-->
  
         <ScatteredBackground 
            image-path="single-cinnamon-stick.svg"
            :count="10"
            opacity="opacity-20"
            container-class="py-20 bg-kk-beige overflow-hidden"
            alt-text="cinnamon stick decoration"
        >
            <section class=" p-4 text-left pb-[40px] text-gray-700"  id="booking">
                <div class="max-w-[90%] m-auto w-full flex flex-col items-center">
                    <div class="backdrop-blur-xs">
                        <h2 class="text-4xl text-center font-bold mb-4 mt-12 text-gray-900">Ready to start?</h2>
                        <p class="text-center text-lg max-w-3xl mb-12 ">
                            Book a quick meeting with us below and let's discuss how we can partner up to bring the fun to your customers.
                        </p>
                    </div>
                    
                    <Calendar />
                </div>
            </section>
        </ScatteredBackground>
      

      <!--<Separator color="white" />-->
      
    </main>

    <Footer></Footer>
    
  </div>
</template>
