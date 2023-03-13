import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import QuizTitle from "@/components/atoms/QuizTitle";
export default {
  title: "Atoms/QuizTitle",
  component: QuizTitle,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof QuizTitle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof QuizTitle> = (args) => (
  <QuizTitle {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  text: "问题文字",
};
