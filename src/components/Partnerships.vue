<template>
    <ScatteredBackground 
            image-path="../assets/star.svg"
            :count="20"
            opacity="opacity-20"
            container-class="py-20 bg-kk-green overflow-hidden"
            alt-text="star decoration"
        >
            <section class="flex flex-col items-center py-16 px-4  text-white">
                <div class="backdrop-blur-xs">
                    <h2 class="text-4xl font-bold text-center mb-4">  
                        Partner with Us & Ignite the Party
                    </h2>

                    <p class="text-center text-lg max-w-4xl mb-8">
                        Ready to add a blast of fun to your shelves? Kanelkaos offers a unique and viral-worthy product that's a&nbsp;guaranteed hit for every Danish 25th birthday celebration. As the first and only brand to offer these ready-to-use cinnamon cannons, we're not just selling a product. We're selling an unforgettable moment. <br>Do you want to be part of that?
                    </p>
                </div>
                

                <div class="flex justify-center flex-wrap gap-8 p-8">
                    <Card v-for="card in cards"
                        :key="card.title"
                        :title="card.title"
                        :description="card.description"
                        :alt="card.alt"
                        :icon="card.icon"
                    />
                </div>


                <div class="backdrop-blur-xs">
                    <h2 class="text-3xl sm:text-4xl font-bold text-center mb-8 mt-16">
                        Trusted by
                    </h2>
                    <div class="flex max-w-4xl justify-center md:justify-between flex-wrap gap-8 pb-4 bg-kk-green">
                        <a 
                            v-for="partner in trustedPartners" 
                            :key="partner.id"
                            :href="partner.url" 
                            :target="partner.external ? '_blank' : '_self'"
                            class="block"
                        >
                            <img 
                                :src="partner.logo" 
                                src="../assets/sdu-ss-logo.svg"
                                :alt="partner.alt"
                                class="max-w-[150px] w-full opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out" 
                            />
                        </a>
                    </div>
                </div>
            </section>
        </ScatteredBackground>
    
</template>

<script setup>
    import Card from './Card.vue';
    import ScatteredBackground from './ScatterBackground.vue';

    // This will import all SVGs in src/assets as modules
    const svgModules = import.meta.glob('../assets/*.svg', { eager: true, import: 'default' });
    
    // Helper to get the asset by filename (e.g., 'sdu-ss-logo.svg')
    const getAssetUrl = (filename) => {
        return svgModules[`${filename}`];
    };

    const trustedPartners = [
        {
            id: 1,
            name: "SDU",
            logo: getAssetUrl('../assets/sdu-ss-logo.svg'),
            alt: "SDU Logo",
            url: "https://sdu.dk",
            external: true
        },
        {
            id: 2,
            name: "Partner 2",
            logo: getAssetUrl('../assets/sdu-ss-logo.svg'),
            alt: "Partner 2 Logo", 
            url: "https://partner2.com",
            external: true
        },
        {
            id: 3,
            name: "Partner 3",
            logo: getAssetUrl('../assets/sdu-ss-logo.svg'),
            alt: "Partner 3 Logo",
            url: "https://partner3.com", 
            external: true
        },
        {
            id: 4,
            name: "Partner 4",
            logo: getAssetUrl('../assets/sdu-ss-logo.svg'),
            alt: "Partner 4 Logo",
            url: "https://partner4.com",
            external: true
        }
    ];

    const cards = [
        {
            title: "Attract New Customers",
            description: "Our unique product is a powerful magnet for party planners and friends looking for a fun and creative birthday surprise.",
            alt: "Lightning Icon",
            icon: "bolt",
        },
        {
            title: "Get on Our Map",
            description: "We'll feature your store on our website's interactive map and promote you across our social media channels to our growing audience.",
            alt: "Map Icon",
            icon: "map",
        },
        {
            title: "Join the Kanelkaos Revolution",
            description: "Selling Kanelkaos is more than just stocking a product; it's about being part of the next big tradition. We make it easy to get started and stand out.",
            alt: "Clapping Hands Icon",
            icon: "hands-clapping",
        }
    ]

</script>