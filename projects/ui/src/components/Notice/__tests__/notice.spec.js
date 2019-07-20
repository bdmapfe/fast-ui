import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Notice from "@ui/src/components/Notice/Notice.vue";

describe("notice.vue", () => {
  it("renders props.data.title when passed", () => {
    const testTitle = "test title";
    const wrapper = shallowMount(Notice, {
      propsData: { data: {title: testTitle} }
    });
    expect(wrapper.text()).to.include(testTitle);
  });
});
