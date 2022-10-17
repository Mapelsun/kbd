<template>
  <Transition name="slide-fade">
    <main
      class="w-full max-w-2xl rounded bg-gray-500 text-gray-800 text-xs flex items-center justify-center"
    >
      <div class="p-1 overflow-hidden w-full">
        <KeyboardRow
          class="mb-[3px]"
          :keys="getRowData('1')"
          :switchBtnKey="switchBtnKey"
        />
        <KeyboardRow
          class="mb-[3px]"
          :keys="getRowData('2')"
          :switchBtnKey="switchBtnKey"
        />
        <KeyboardRow
          class="mb-[3px]"
          :keys="getRowData('3')"
          @toggleBtnKey="toggleBtnKey"
          :switchBtnKey="switchBtnKey"
        />
        <KeyboardRow
          class="mb-[3px]"
          :keys="getRowData('4')"
          @toggleBtnKey="toggleBtnKey"
          :switchBtnKey="switchBtnKey"
        />
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
      switchBtnKey: true,
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
        { label: ["q", "Q"], width: "w-10", row: "2" },
        { label: ["w", "W"], width: "w-10", row: "2" },
        { label: ["e", "E"], width: "w-10", row: "2" },
        { label: ["r", "R"], width: "w-10", row: "2" },
        { label: ["t", "T"], width: "w-10", row: "2" },
        { label: ["y", "Y"], width: "w-10", row: "2" },
        { label: ["u", "U"], width: "w-10", row: "2" },
        { label: ["i", "I"], width: "w-10", row: "2" },
        { label: ["o", "O"], width: "w-10", row: "2" },
        { label: ["p", "P"], width: "w-10", row: "2" },
        { label: "[", width: "w-12", row: "2" },
        { label: "]", width: "w-12", row: "2" },
        { label: "|", width: "w-full", row: "2", flexGrow: true },
        { label: "caps", width: "w-16", row: "3" },
        { label: ["a", "A"], width: "w-10", row: "3" },
        { label: ["s", "S"], width: "w-10", row: "3" },
        { label: ["d", "D"], width: "w-10", row: "3" },
        { label: ["f", "F"], width: "w-10", row: "3" },
        { label: ["g", "G"], width: "w-10", row: "3" },
        { label: ["h", "H"], width: "w-10", row: "3" },
        { label: ["j", "J"], width: "w-10", row: "3" },
        { label: ["k", "K"], width: "w-10", row: "3" },
        { label: ["l", "L"], width: "w-10", row: "3" },
        { label: ";", width: "w-10", row: "3" },
        { label: "'", width: "w-10", row: "3" },
        { label: "enter", width: "w-full", row: "3", flexGrow: true },
        { label: "shift", width: "w-20", row: "4" },
        { label: ["z", "Z"], width: "w-10", row: "4" },
        { label: ["x", "X"], width: "w-10", row: "4" },
        { label: ["c", "C"], width: "w-10", row: "4" },
        { label: ["v", "V"], width: "w-10", row: "4" },
        { label: ["b", "B"], width: "w-10", row: "4" },
        { label: ["n", "N"], width: "w-10", row: "4" },
        { label: ["m", "M"], width: "w-10", row: "4" },
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
    toggleBtnKey() {
      this.switchBtnKey = !this.switchBtnKey;
    },
  },
};
</script>

<style lang="scss" scoped></style>
