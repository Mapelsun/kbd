<template>
  <div class="flex space-x-[3px]">
    <div
      v-for="key in keys"
      :key="key.label"
      class="h-10 min-w-10"
      :class="[key.flexGrow ? 'flex-1' : '', `${key.width}`]"
      @click="sendKey(key.label)"
    >
      <button
        class="overflow-hidden relative h-10 px-1 rounded flex justify-center shadow align-center bg-gradient-to-b from-gray-50 to-gray-400 pt-[2px] transition-all duration-75 top-0 active:top-1"
        :class="[
          `${key.width}`,
          appData.selectInputKey == key.label.toLowerCase() ? 'top-1' : '',
        ]"
      >
        <div
          class="w-full h-10 absolute -top-[2px] left-0 flex items-center justify-between blur-sm"
        >
          <div
            class="h-8 w-8 bg-gray-200 flex-shrink-0 rotate-45 -left-5 relative"
          ></div>
          <div
            class="h-8 w-8 bg-gray-200 flex-shrink-0 rotate-45 -right-5 relative"
          ></div>
        </div>
        <div
          class="relative h-7 border border-gray-100 flex-grow bg-gradient-to-b from-gray-200 to-gray-50 flex pt-1 pl-1 rounded"
        >
          <span class="leading-none">{{ key.label }}</span>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "KeyboardRow",
  inject: ["getKey", "appData"],
  props: {
    keys: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    sendKey(val) {
      this.getKey(val);
    },
  },
};
</script>

<style lang="scss" scoped></style>
