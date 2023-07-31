<script setup>
const route = useRoute()
const message = reactive({
  name: "",
  email: "",
  phone: "",
  message: ""
});
const errorMessage = ref('');
const successMessage = ref('');

const disableButton = computed(() => {
  for (let key in message) {
    if (!message[key]) return true;
  }
  return false;
});

const onSubmit = async () => {
  try {
    const listingId = route.params.id
    const response = await $fetch(`/api/car/listings/${listingId}/message`, {
      method: "post",
      body: message
    })
    message.value = {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
    successMessage.value = "Message sent!"
    errorMessage.value = ""
  } catch (err) {
    errorMessage.value = err.statusMessage;
    successMessage.value = "";
  }
};
</script>

<template>
  <div class="mt-10">
    <div class="flex w-[600px] justify-between">
      <input
        v-model="message.name"
        type="text"
        class="border p-1"
        placeholder="Name"
      />
      <input
        v-model="message.email"
        type="text"
        class="border p-1"
        placeholder="Email"
      />
      <input
        v-model="message.phone"
        type="text"
        class="border p-1"
        placeholder="Phone"
      />
    </div>
    <div class="flex mt-4 w-[600px]">
      <textarea
        v-model="message.message"
        class="border p-1 w-full"
        placeholder="Message"
      ></textarea>
    </div>
    <button
      class="bg-blue-400 text-white px-10 py-3 rounded mt-4"
      :disabled="disableButton"
      @click="onSubmit"
    >
      Submit
    </button>
    <p v-if="errorMessage" class="mt-3 text-red-400">{{ errorMessage }}</p>
    <p v-if="successMessage" class="mt-3 text-green-400">{{ successMessage }}</p>
  </div>
</template>
