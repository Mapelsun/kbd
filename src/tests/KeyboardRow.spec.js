import { describe, it, expect } from "vitest";

import { shallowMount } from "@vue/test-utils";
import KeyboardRow from "@/components/KeyboardRow.vue";

describe("KeyboardRow", () => {
  it("renders properly", () => {
    const wrapper = shallowMount(KeyboardRow);
    expect(wrapper).toBeDefined();
  });
});
