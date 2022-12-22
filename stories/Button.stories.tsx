import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const BasicBtn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicBtn.args = {
  label: '참여하기',
  size: 'smallBold'
};

export const BoldTwoLineText = Template.bind({});
BoldTwoLineText.args = {
  size : 'bigThin',
  priceLabel:'30,000'
};

export const BoldOneText = Template.bind({});
BoldOneText.args = {
  size: 'bigBold',
  label: '작성완료',
};
