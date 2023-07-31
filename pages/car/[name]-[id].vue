<template>
  <div v-if="car">
    <CarDetailHero :car="car" />
    <CarDetailAttributes :features="car.features" />
    <CarDetailDescription :description="car.description" />
    <CarDetailContact />
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'custom'
  })

  const route = useRoute()
  const { toTitleCase } = useUtilities()
  useHead({
    title: toTitleCase(route.params.name)
  })

  const car = await useFetchCar(route.params.id)
</script>
