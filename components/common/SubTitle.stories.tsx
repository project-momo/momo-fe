import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SubTitle } from './SubTitle';

export default {
   title: 'Example/Common',
   component: SubTitle,
   argTypes: {
    label: {
       name: 'label',
       type: { name: 'string'},
    },
    labelMore : {
       name : 'labelMore',
       type: { name: 'string'},
    }
   },
 } as ComponentMeta<typeof SubTitle>;


const Template: ComponentStory<typeof SubTitle> = (args) => <SubTitle {...args} />;

export const BasicTitle = Template.bind({});
BasicTitle.args = {
   label: '전달 사항',
  labelMore : ''
};

export const MoreTitle = Template.bind({});
MoreTitle.args = {
  label: '추가 주소 입력',
   labelMore : '개인 정보 보호를 위해 정확한 주소를 입력 하지마세요.' ,
};
