<template>
  <header class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md ">
    <NuxtLink class="text-3xl font-mono" to="">cartrader</NuxtLink>
    <div v-if="user" class="flex">
      <NuxtLink to="/profile/listings" class="mr-5">Profile</NuxtLink>
      <p class="cursor-pointer" @click="logout">Logout</p>
    </div>
    <NuxtLink v-else to="/login" class="mr-5">Login</NuxtLink>
  </header>
</template>

<script setup>
  const user = useSupabaseUser()
  // const supabase = useSupabaseClient() // 

  const logout = async () => {
    // const {error} = supabase.auth.signOut() // 
    try {
      await $fetch('/api/_supabase/session', {
        method: 'POST',
        body: { event: 'SIGNED_OUT', session: null }
      })
    } catch(err) {
      return console.error(err)
    }
    user.value = null
    navigateTo('/')
  }
</script>
