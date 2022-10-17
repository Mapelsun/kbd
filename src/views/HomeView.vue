<template>
  <main class="min-h-screen p-4 pt-20 bg-gray-50 flex flex-col items-center">
    <TextAreaInput
      @toggleKbd="(val) => (toggleKeyboard = val)"
      @inputKey="setSelectInputKey"
      v-model="message"
      ref="textAreaInput"
    />
    <KeyboardInput v-show="toggleKeyboard" ref="keyboardInput" />
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
    setSelectInputKey(val) {
      if (val === "Backspace") {
        this.selectInputKey = "backspace";
      } else if (val === "Shift") {
        this.selectInputKey = "shift";
        this.$refs.keyboardInput.toggleBtnKey();
      } else if (val === "Enter") {
        this.selectInputKey = "enter";
      } else if (val === "CapsLock") {
        this.selectInputKey = "caps";
        this.$refs.keyboardInput.toggleBtnKey();
      } else {
        this.selectInputKey = val;
      }
    },
    getKey(val) {
      this.message += val;
    },
    deleteText() {
      this.message = this.message.substring(0, this.message.length - 1);
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
      deleteText: this.deleteText,
      appData,
    };
  },
};
</script>
