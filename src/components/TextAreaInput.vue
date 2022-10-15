<template>
  <div
    class="w-full max-w-md mb-5 border rounded overflow-hidden shadow bg-white-50"
  >
    <label
      for="texts"
      class="text-sm text-gray-600 font-medium inline-block px-2 py-3 italic"
      >Vue Virtual Keyboard</label
    >
    <textarea
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      id="texts"
      class="shadow form-textarea block w-full py-2 px-3 resize-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-gray-300"
      rows="5"
      placeholder="Hey..."
      @focus="$emit('toggleKbd', true)"
      @keyup="showKey($event)"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "TextAreaInput",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  data() {
    return {
      text: "",
    };
  },
  methods: {
    showKey(e) {
      console.log(e.key);
    },
  },
};
</script>

<style lang="scss" scoped></style>
