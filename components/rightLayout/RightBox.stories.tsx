import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconHot from'./../../assets/images/icon_hot.svg'

import { RightBox } from './RightBox';

export default {
   title: 'Example/RightLayout',
   component: RightBox,
   argTypes: {
    label: {
       name: 'label',
       type: { name: 'string'},
    },
    imgLink : {
       name : 'imgLink',
       type: { name: 'string'},
    }
   },
 } as ComponentMeta<typeof RightBox>;


const Template: ComponentStory<typeof RightBox> = (args) => <RightBox {...args} />;

export const RightSubBox = Template.bind({});
RightSubBox.args = {
   label: '실시간 핫한 모임',
   imgLink : IconHot,
   children : null
};

