import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Selections from "@/components/organisms/Selections";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Selections",
  component: Selections,
} as ComponentMeta<typeof Selections>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Selections> = (args) => (
  <Selections {...args} />
);

export const Example = Template.bind({});
Example.args = {
  selections: ["选项1", "选项2", "选项3", "选项4"],
  answer: "选项1",
};
