import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Title } from './Title';

export default {
  title: 'Example/Main',
  component: Title,
  argTypes: {
   label: {
      name: 'label',
      type: { name: 'string'},
      defaultValue: 'Hello'
   }
  },
} as ComponentMeta<typeof Title>;


const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const BasicTitle = Template.bind({});
BasicTitle.args = {
  label: '참여하기',
};

