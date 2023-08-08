import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template:ComponentStory<typeof ProfilePage> = (args:{}) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    profile: {
        form: {
            first: 'Firstname',
            lastname: 'Lastname',
            age: 23,
            currency: Currency.UAH,
            country: Country.Ukraine,
            city: 'City',
            username: 'Admin',
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            first: 'Firstname',
            lastname: 'Lastname',
            age: 23,
            currency: Currency.UAH,
            country: Country.Ukraine,
            city: 'City',
            username: 'Admin',
        },
    },
})];
