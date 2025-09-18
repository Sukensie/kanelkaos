<template>
    <section class="py-20 bg-white relative overflow-hidden" ref="starContainer">      
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold mb-4">What Do The <span class="text-kk-green">Users</span> Say</h2>
                <p class="text-xl text-gray-600">Hear from the pilot users that have tried our cinnamon cannons</p>
            </div>
            <div class="grid md:grid-cols-3 gap-8 max-w-sm md:max-w-full m-auto">
                <div v-for="(testimonial, idx) in testimonials" :key="idx" class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div class="flex items-center mb-4 text-left">
                        <div :class="['w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg', testimonial.bgClass]">
                            {{ testimonial.name.charAt(0) }}
                        </div>
                        <div class="ml-4">
                            <div class="font-semibold">{{ testimonial.name }}</div>
                            <div class="text-yellow-400 flex ">
                                <template v-for="n in 5" :key="n">
                                    <div class="relative w-5 h-5">
                                        <!-- Background empty star -->
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#e5e7eb" class="w-5 h-5 absolute">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                                        </svg>
                                        
                                        <!-- Full star overlay -->
                                        <svg v-if="testimonial.rating >= n" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 absolute">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                                        </svg>
                                        
                                        <!-- Half star overlay -->
                                        <svg v-else-if="testimonial.rating >= n - 0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 absolute" style="clip-path: inset(0 50% 0 0);">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                                        </svg>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-600 italic text-left">
                        "{{ testimonial.text }}"
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

const testimonials = [
    {
        name: "Wouter H.",
        bgClass: "bg-kk-grey",
        text: "Godverdomme man, that was crazy. The cannon went off and the cinnamon went everywhere. Couldn't stop laughing and coughing. Total chaos, but a sick memory!",
        rating: 5
    },
    {
        name: "Øyvind P.",
        bgClass: "bg-blue-400",
        text: "Got one of these as a gift and it totally saved the day. So easy to use and everyone got a good laugh. I'll just bring earplugs next time haha!",
        rating: 4
    },
    {
        name: "Natasha V.",
        bgClass: "bg-orange-800",
        text: "We bought this for our friend's 25th and it was a huge hit. None expected us to do something else than a classic powder throwing... And the video we got is hilarious!",
        rating: 4.5
    }
]
</script>