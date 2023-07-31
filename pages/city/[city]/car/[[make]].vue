<template>
  <div>
    <CarCards v-if="cars.length" :cars="cars" />
    <h1 v-else class="text-red-600">No Cars Found With Filters</h1>
  </div>
</template>

<script setup>
  const route = useRoute()
  const cars = await useFetchCars(route.params.city, {
    minPrice: route.query.minPrice,
    maxPrice: route.query.maxPrice,
    make: route.params.make
  })

  watch(() => route.query, () => window.location.reload(true))
</script>