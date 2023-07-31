<template>
  <div class="w-full">
    <CarCard
      v-for="car in cars"
      :key="car.id"
      :car="car"
      :favored="car.id in favorite"
      @favor="handleFavorite"
    />
  </div>
</template>

<script setup>
  const props = defineProps({
    cars: Array
  })

  const favorite = useLocalStorage('favorite', {})

  const handleFavorite = (id) => {
    if(id in favorite.value) {
      delete favorite.value[id]
    } else {
      favorite.value = {
        ...favorite.value,
        [id]: true
      }
    }
  }
</script>