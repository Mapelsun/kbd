<template>
  <Transition name="slide-fade">
    <main
      class="w-full max-w-2xl rounded bg-gray-500 text-gray-800 text-xs flex items-center justify-center"
    >
      <div class="p-1 overflow-hidden w-full">
        <KeyboardRow class="mb-[3px]" :keys="getRowData('1')" />
        <KeyboardRow class="mb-[3px]" :keys="getRowData('2')" />
        <KeyboardRow class="mb-[3px]" :keys="getRowData('3')" />
        <KeyboardRow class="mb-[3px]" :keys="getRowData('4')" />
        <KeyboardRow :keys="getRowData('5')" />
      </div>
    </main>
  </Transition>
</template>

<script>
import KeyboardRow from "@/components/KeyboardRow.vue";
export default {
  name: "KeyboardInput",
  components: { KeyboardRow },
  data() {
    return {
      keys: [
        { label: ["~", "`"], width: "w-10", row: "1" },
        { label: ["!", "1"], width: "w-10", row: "1" },
        { label: ["@", "2"], width: "w-10", row: "1" },
        { label: ["#", "3"], width: "w-10", row: "1" },
        { label: ["$", "4"], width: "w-10", row: "1" },
        { label: ["%", "5"], width: "w-10", row: "1" },
        { label: ["^", "6"], width: "w-10", row: "1" },
        { label: ["&", "7"], width: "w-10", row: "1" },
        { label: ["*", "8"], width: "w-10", row: "1" },
        { label: ["(", "9"], width: "w-10", row: "1" },
        { label: [")", "0"], width: "w-10", row: "1" },
        { label: ["_", "-"], width: "w-10", row: "1" },
        { label: ["+", "="], width: "w-10", row: "1" },
        { label: "backspace", width: "w-full", row: "1", flexGrow: true },
        { label: "tab", width: "w-14", row: "2" },
        { label: "Q", width: "w-10", row: "2" },
        { label: "W", width: "w-10", row: "2" },
        { label: "E", width: "w-10", row: "2" },
        { label: "R", width: "w-10", row: "2" },
        { label: "T", width: "w-10", row: "2" },
        { label: "Y", width: "w-10", row: "2" },
        { label: "U", width: "w-10", row: "2" },
        { label: "I", width: "w-10", row: "2" },
        { label: "O", width: "w-10", row: "2" },
        { label: "P", width: "w-10", row: "2" },
        { label: "[", width: "w-12", row: "2" },
        { label: "]", width: "w-12", row: "2" },
        { label: "|", width: "w-full", row: "2", flexGrow: true },
        { label: "caps", width: "w-16", row: "3" },
        { label: "A", width: "w-10", row: "3" },
        { label: "S", width: "w-10", row: "3" },
        { label: "D", width: "w-10", row: "3" },
        { label: "F", width: "w-10", row: "3" },
        { label: "G", width: "w-10", row: "3" },
        { label: "H", width: "w-10", row: "3" },
        { label: "J", width: "w-10", row: "3" },
        { label: "K", width: "w-10", row: "3" },
        { label: "L", width: "w-10", row: "3" },
        { label: ";", width: "w-10", row: "3" },
        { label: "'", width: "w-10", row: "3" },
        { label: "enter", width: "w-full", row: "3", flexGrow: true },
        { label: "shift", width: "w-20", row: "4" },
        { label: "Z", width: "w-10", row: "4" },
        { label: "X", width: "w-10", row: "4" },
        { label: "C", width: "w-10", row: "4" },
        { label: "V", width: "w-10", row: "4" },
        { label: "B", width: "w-10", row: "4" },
        { label: "N", width: "w-10", row: "4" },
        { label: "M", width: "w-10", row: "4" },
        { label: ",", width: "w-10", row: "4" },
        { label: ".", width: "w-10", row: "4" },
        { label: "/", width: "w-10", row: "4" },
        { label: "shift", width: "w-16", row: "4", flexGrow: true },
        { label: "▲", width: "w-10", row: "4" },
        { label: "", width: "w-10", row: "4" },
        { label: "ctrl", width: "w-10", row: "5" },
        { label: "fn", width: "w-10", row: "5" },
        { label: "win", width: "w-10", row: "5" },
        { label: "alt", width: "w-10", row: "5" },
        { label: " ", width: "w-full", row: "5", flexGrow: true },
        { label: "alt", width: "w-10", row: "5" },
        { label: "ctrl", width: "w-10", row: "5" },
        { label: "◄", width: "w-10", row: "5" },
        { label: "▼", width: "w-10", row: "5" },
        { label: "►", width: "w-10", row: "5" },
      ],
    };
  },
  methods: {
    getRowData(rowId) {
      return this.keys.filter((key) => key.row === rowId);
    },
  },
};
</script>

<style lang="scss" scoped></style>
