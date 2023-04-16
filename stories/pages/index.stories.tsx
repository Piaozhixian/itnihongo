import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import IndexPage from "@/pages";
export default {
  title: "Pages/IndexPage",
  component: IndexPage,
} as ComponentMeta<typeof IndexPage>;

const Template: ComponentStory<typeof IndexPage> = (args) => <IndexPage />;

export const Example = Template.bind({});
