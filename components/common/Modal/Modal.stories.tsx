import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from './Modal';
import MoimModal from './ModalCompo/MoimModal';

export default {
   title: 'Example/Modal',
   component: Modal,
   argTypes: {
    children: {
       name: 'children',
    }
   },
 } as ComponentMeta<typeof Modal>;


const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalLayout = Template.bind({});
ModalLayout.args = {
   
};
export const MoimModalLayout = Template.bind({});
MoimModalLayout.args = {
   children : <MoimModal title='로그인' subTitle='등록된 모임을 확인해보세요.' mainBtnLabel='모임 확인하기' routeBtnLabel='다른 모임 살펴보기' />
};


