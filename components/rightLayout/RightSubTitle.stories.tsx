import React from 'react';
// eslint-disable-next-line import/named
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconHot from './../../assets/images/icon_hot.svg';

// eslint-disable-next-line import/no-unresolved
import { RightSubTitle } from './RightSubTitle';

export default {
   title: 'Example/RightLayout',
   component: RightSubTitle,
   argTypes: {
      label: {
         name: 'label',
         type: { name: 'string' }
      },
      imgLink: {
         name: 'imgLink',
         type: { name: 'string' }
      }
   }
} as ComponentMeta<typeof RightSubTitle>;

const Template: ComponentStory<typeof RightSubTitle> = args => <RightSubTitle {...args} />;

export const BasicRightSubTitle = Template.bind({});
BasicRightSubTitle.args = {
   label: '실시간 핫한 모임',
   imgLink: IconHot
};
