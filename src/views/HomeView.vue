<template>
  <main class="min-h-screen p-4 pt-20 bg-gray-50 flex flex-col items-center">
    <TextAreaInput
      @toggleKbd="(val) => (toggleKeyboard = val)"
      @inputKey="(val) => (selectInputKey = val)"
      v-model="message"
    />
    <KeyboardInput v-show="toggleKeyboard" />
    <!-- <div>Message - {{ message }}</div>
    <div>Select Input Key - {{ selectInputKey }}</div> -->
  </main>
</template>

<script>
import TextAreaInput from "@/components/TextAreaInput.vue";
import KeyboardInput from "@/components/KeyboardInput.vue";
export default {
  name: "HomeView",
  components: { TextAreaInput, KeyboardInput },
  data() {
    return {
      toggleKeyboard: false,
      selectInputKey: "",
      message: "",
    };
  },
  computed: {
    sendSelectedInputKey() {
      return this.selectInputKey;
    },
  },
  methods: {
    getKey(val) {
      this.message += val;
    },
  },
  provide() {
    const appData = {};
    Object.defineProperty(appData, "selectInputKey", {
      enumerable: true,
      get: () => this.selectInputKey,
    });
    return {
      getKey: this.getKey,
      appData,
    };
  },
};
</script>
