import React from 'react';
// eslint-disable-next-line import/named
import { ComponentStory, ComponentMeta } from '@storybook/react';

// eslint-disable-next-line import/no-unresolved
import { HeaderButton } from './HeaderButton';
export default {
   title: 'Example/HeaderButton',
   component: HeaderButton,
   parameters: {
      // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen'
   }
} as ComponentMeta<typeof HeaderButton>;

const Template: ComponentStory<typeof HeaderButton> = args => <HeaderButton {...args} />;

export const label = Template.bind({});
label.args = {
   label: 'Log in'
};
