import { describe, it, expect } from "vitest";

import { shallowMount } from "@vue/test-utils";
import TextAreaInput from "@/components/TextAreaInput.vue";

describe("TextAreaInput", () => {
  it("renders properly", () => {
    const wrapper = shallowMount(TextAreaInput);
    expect(wrapper).toBeDefined();
  });
});
