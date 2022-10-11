<template>
  <Transition name="slide-fade">
    <main
      class="w-full max-w-2xl rounded bg-gray-500 text-gray-800 text-xs flex items-center justify-center"
    >
      <div class="p-1 overflow-hidden w-full">
        <div class="flex space-x-[3px] mb-[3px]">
          <template v-for="key in keys">
            <div
              v-if="key.row === '1'"
              :key="key.label"
              class="h-10 min-w-10"
              :class="[key.flexGrow ? 'flex-1' : '', `${key.width}`]"
            >
              <button
                class="overflow-hidden relative h-10 px-1 rounded flex justify-center shadow align-center bg-gradient-to-b from-gray-50 to-gray-400 pt-[2px] transition-all duration-75 top-0 active:top-1"
                :class="[`${key.width}`]"
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
          </template>
        </div>
        <div class="flex space-x-[3px] mb-[3px]">
          <template v-for="key in keys">
            <div
              v-if="key.row === '2'"
              :key="key.label"
              class="h-10 min-w-10"
              :class="[key.flexGrow ? 'flex-1' : '', `${key.width}`]"
            >
              <button
                class="overflow-hidden relative h-10 px-1 rounded flex justify-center shadow align-center bg-gradient-to-b from-gray-50 to-gray-400 pt-[2px] transition-all duration-75 top-0 active:top-1"
                :class="[`${key.width}`]"
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
          </template>
        </div>
        <div class="flex space-x-[3px] mb-[3px]">
          <template v-for="key in keys">
            <div
              v-if="key.row === '3'"
              :key="key.label"
              class="h-10 min-w-10"
              :class="[key.flexGrow ? 'flex-1' : '', `${key.width}`]"
            >
              <button
                class="overflow-hidden relative h-10 px-1 rounded flex justify-center shadow align-center bg-gradient-to-b from-gray-50 to-gray-400 pt-[2px] transition-all duration-75 top-0 active:top-1"
                :class="[`${key.width}`]"
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
          </template>
        </div>
        <div class="flex space-x-[3px] mb-[3px]">
          <template v-for="key in keys">
            <div
              v-if="key.row === '4'"
              :key="key.label"
              class="h-10 min-w-10"
              :class="[key.flexGrow ? 'flex-1' : '', `${key.width}`]"
            >
              <button
                class="overflow-hidden relative h-10 px-1 rounded flex justify-center shadow align-center bg-gradient-to-b from-gray-50 to-gray-400 pt-[2px] transition-all duration-75 top-0 active:top-1"
                :class="[`${key.width}`]"
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
          </template>
        </div>
        <div class="flex space-x-[3px]">
          <template v-for="key in keys">
            <div
              v-if="key.row === '5'"
              :key="key.label"
              class="h-10 min-w-10"
              :class="[key.flexGrow ? 'flex-1' : '', `${key.width}`]"
            >
              <button
                class="overflow-hidden relative h-10 px-1 rounded flex justify-center shadow align-center bg-gradient-to-b from-gray-50 to-gray-400 pt-[2px] transition-all duration-75 top-0 active:top-1"
                :class="[`${key.width}`]"
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
          </template>
        </div>
      </div>
    </main>
  </Transition>
</template>

<script>
export default {
  name: "KeyboardInput",
  data() {
    return {
      keys: [
        { label: "`", width: "w-10", row: "1" },
        { label: "1", width: "w-10", row: "1" },
        { label: "2", width: "w-10", row: "1" },
        { label: "3", width: "w-10", row: "1" },
        { label: "4", width: "w-10", row: "1" },
        { label: "5", width: "w-10", row: "1" },
        { label: "6", width: "w-10", row: "1" },
        { label: "7", width: "w-10", row: "1" },
        { label: "8", width: "w-10", row: "1" },
        { label: "9", width: "w-10", row: "1" },
        { label: "0", width: "w-10", row: "1" },
        { label: "-", width: "w-10", row: "1" },
        { label: "=", width: "w-10", row: "1" },
        { label: "delete", width: "w-full", row: "1", flexGrow: true },
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
        { label: "return", width: "w-full", row: "3", flexGrow: true },
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
        { label: "fn", width: "w-10", row: "5" },
        { label: "ctrl", width: "w-10", row: "5" },
        { label: "opt", width: "w-10", row: "5" },
        { label: "cmd", width: "w-10", row: "5" },
        { label: "", width: "w-full", row: "5", flexGrow: true },
        { label: "cmd", width: "w-10", row: "5" },
        { label: "opt", width: "w-10", row: "5" },
        { label: "◄", width: "w-10", row: "5" },
        { label: "▼", width: "w-10", row: "5" },
        { label: "►", width: "w-10", row: "5" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
