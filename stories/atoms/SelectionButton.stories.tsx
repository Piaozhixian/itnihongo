import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// import SelectionButton from '../../src/components/atoms/SelectionButton';
import SelectionButton from '@/components/atoms/SelectionButton';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/SelectionButton',
  component: SelectionButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SelectionButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SelectionButton> = (args) => <SelectionButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  text: '按钮文字'
};
