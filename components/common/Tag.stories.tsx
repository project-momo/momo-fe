import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tag } from './Tag';

export default {
   title: 'Example/Common',
   component: Tag,
   argTypes: {
    label: {
       name: 'label',
       type: { name: 'string'},
    }
   },
 } as ComponentMeta<typeof Tag>;


const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const BasicTag = Template.bind({});
BasicTag.args = {
   label: '멘토링',
};