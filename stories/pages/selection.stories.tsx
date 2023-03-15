import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SelectionPage from "@/pages/selection";
export default {
  title: "Pages/SelectionPage",
  component: SelectionPage,
} as ComponentMeta<typeof SelectionPage>;

const Template: ComponentStory<typeof SelectionPage> = (args) => (
  <SelectionPage {...args} />
);

export const Example = Template.bind({});
Example.args = {
  quizTitle: "问题",
  selections: ["选项1", "选项2", "选项3", "选项4"],
  answer: "选项1",
};
