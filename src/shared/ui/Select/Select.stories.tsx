import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Select>;

const Template:ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Укажите значение',
    options: [{ value: '123', content: 'first' }, { value: '1234', content: 'second' }],
};