<script setup>
  import heartFilled from '@/assets/heartFilled.png'
  import heartOutline from '@/assets/heartOutline.png'

  const props = defineProps({
    car: Object,
    favored: Boolean
  })

  const emit = defineEmits(['favor'])
</script>

<template>
  <div class="relative shadow border w-full overflow-hidden mb-5 h-[200px]">
    <img
      class="absolute w-7 right-5 top-2 z-20 cursor-pointer"
      :src="favored ? heartFilled : heartOutline"
      :alt="car.name"
      @click="emit('favor', car.id)"
    >
    <div class="flex h-full mr-8 cursor-pointer" @click="navigateTo(`/car/${car.name}-${car.id}`)">
      <NuxtImg
        :src="car.image"
        alt="Volvo_XC40"
        class="w-[300px] h-full"
      />
      <div class="p-4 flex flex-col">
        <div>
          <h1 class="text-2xl text-blue-700">{{ car.name }}</h1>
          <p class="text-gray-700">{{ car.description }}</p>
        </div>
        <h1 class="mt-auto text-xl">${{ car.price }}</h1>
      </div>
    </div>
  </div>
</template>