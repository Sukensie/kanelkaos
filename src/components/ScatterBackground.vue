<template>
    <div class="relative" :class="containerClass">
        <!-- Scattered items -->
        <img 
            v-for="item in items" 
            :key="item.id"
            :src="getAssetUrl(imagePath)"
            :style="{
                left: item.x + '%',
                top: item.y + '%',
                transform: 'translate(-50%, -50%)',
                width: item.size + 'px',
                height: item.size + 'px',
                rotate: item.rotation + 'deg'
            }"
            :class="['absolute pointer-events-none', opacityClass]"
            :alt="altText"
        />
        
        <!-- Slot for content -->
        <div class="relative z-10">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const getAssetUrl = (path) => {
    return new URL(path, import.meta.url).href
}

// Props with defaults
const props = defineProps({
    imagePath: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        default: 40
    },
    minSize: {
        type: Number,
        default: 36
    },
    maxSize: {
        type: Number,
        default: 100
    },
    opacity: {
        type: String,
        default: 'opacity-30'
    },
    containerClass: {
        type: String,
        default: 'overflow-hidden'
    },
    altText: {
        type: String,
        default: 'background decoration'
    }
})

const items = ref([])
const opacityClass = ref(props.opacity)

const generateItems = () => {
    const newItems = []
    
    for (let i = 0; i < props.count; i++) {
        newItems.push({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.floor(Math.random() * (props.maxSize - props.minSize + 1)) + props.minSize,
            rotation: Math.random() * 360
        })
    }
    
    items.value = newItems
}

onMounted(() => {
    generateItems()
})
</script>