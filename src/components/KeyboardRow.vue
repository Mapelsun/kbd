<template>
  <div class="flex space-x-[3px]">
    <template v-for="key in keys" :key="key.label">
      <div
        v-if="typeof key.label === 'string'"
        class="h-10 min-w-10"
        :class="[key.flexGrow ? 'flex-1' : '', `${key.width}`]"
        @click="sendKey(key.label)"
      >
        <button
          class="overflow-hidden relative h-10 px-1 rounded flex justify-center shadow align-center bg-gradient-to-b from-gray-50 to-gray-400 pt-[2px] transition-all duration-75 top-0 active:top-1"
          :class="[
            `${key.width}`,
            appData.selectInputKey == key.label.toLowerCase() &&
            key.label !== ''
              ? 'top-1'
              : '',
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
      <div
        v-if="typeof key.label === 'object'"
        class="h-10 min-w-10"
        :class="[key.flexGrow ? 'flex-1' : '', `${key.width}`]"
        @click="sendKeyDual(key.label)"
      >
        <button
          class="overflow-hidden relative h-10 px-1 rounded flex justify-center shadow align-center bg-gradient-to-b from-gray-50 to-gray-400 pt-[2px] transition-all duration-75 top-0 active:top-1"
          :class="[
            `${key.width}`,
            key.label.includes(appData.selectInputKey) && key.label !== ''
              ? 'top-1'
              : '',
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
            <span v-if="switchBtnKey" class="leading-none">{{
              key.label[0]
            }}</span>
            <span v-else class="leading-none">{{ key.label[1] }}</span>
          </div>
        </button>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "KeyboardRow",
  inject: ["getKey", "appData", "deleteText"],
  props: {
    keys: {
      type: Array,
      default: () => [],
    },
    switchBtnKey: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    sendKey(val) {
      if (val === "caps" || val === "shift") {
        this.$emit("toggleBtnKey");
      } else if (val === "backspace") {
        this.deleteText();
      } else if (val === "enter") {
        this.getKey("\n");
      } else if (val === "tab") {
        this.getKey("        ");
      } else if (
        val === "ctrl" ||
        val === "fn" ||
        val === "win" ||
        val === "alt"
      ) {
        return;
      } else {
        this.getKey(val);
      }
    },
    sendKeyDual(val) {
      if (this.switchBtnKey) {
        this.getKey(val[0]);
      } else {
        this.getKey(val[1]);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
