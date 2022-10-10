<template>
  <main class="min-h-screen p-8 bg-gray-50 flex justify-center items-center">
    <TextAreaInput />
  </main>
</template>

<script>
import TextAreaInput from "@/components/TextAreaInput.vue";
export default {
  name: "HomeView",
  components: { TextAreaInput },
};
</script>
