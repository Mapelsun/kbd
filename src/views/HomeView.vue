<template>
  <main
    class="min-h-screen p-8 bg-gray-50 flex flex-col justify-center items-center"
  >
    <TextAreaInput @toggleKbd="(val) => (toggleKeyboard = val)" />
    <KeyboardInput v-show="toggleKeyboard" />
  </main>
</template>

<script>
import TextAreaInput from "@/components/TextAreaInput.vue";
import KeyboardInput from "../components/KeyboardInput.vue";
export default {
  name: "HomeView",
  components: { TextAreaInput, KeyboardInput },
  data() {
    return {
      toggleKeyboard: false,
    };
  },
};
</script>
