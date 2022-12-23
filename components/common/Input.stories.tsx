import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';

export default {
  title: 'Example/Common',
  component: Input,
  argTypes: {
   label: {
      name: 'label',
      type: { name: 'string'},
   },
   placeholder : {
      name : 'placeholder',
      type: { name: 'string'},
   },
   labelMore : {
      name : 'labelMore',
      type: { name: 'string'},
   }
  },
} as ComponentMeta<typeof Input>;


const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const BasicInput = Template.bind({});
BasicInput.args = {
   label: '전달 사항',
   placeholder: '모임 신청 전 전달 해야 할 사항이 있다면 적어 주세요.',
  labelMore : ''
};

export const MoreInput = Template.bind({});
MoreInput.args = {
  label: '추가 주소 입력',
  placeholder: '예시 근처 스타벅스 협의',
   labelMore : '개인 정보 보호를 위해 정확한 주소를 입력 하지마세요.' ,
};
