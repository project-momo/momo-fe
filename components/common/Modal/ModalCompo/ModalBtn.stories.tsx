import React from 'react';
// eslint-disable-next-line import/named
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ModalBtn from './ModalBtn';

export default {
   title: 'Example/Modal',
   component: ModalBtn,
   argTypes: {
      mainBtnLabel: {
         name: 'mainBtnLabel',
         type: { name: 'string' }
      }
   }
} as ComponentMeta<typeof ModalBtn>;

const Template: ComponentStory<typeof ModalBtn> = args => <ModalBtn {...args} />;

export const ModalButton = Template.bind({});
ModalButton.args = {
   mainBtnLabel: '모임 확인하기'
};
