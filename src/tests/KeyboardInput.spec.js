import { describe, it, expect } from "vitest";

import { shallowMount } from "@vue/test-utils";
import KeyboardInput from "@/components/KeyboardInput.vue";

describe("KeyboardInput", () => {
  it("renders properly", () => {
    const wrapper = shallowMount(KeyboardInput);
    expect(wrapper).toBeDefined();
  });
});
