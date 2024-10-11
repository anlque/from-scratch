import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { AppLink, AppLinkTheme } from "./AppLink";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
  title: "shared/AppLink",
  component: AppLink,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    to: "/",
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
  <AppLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  theme: AppLinkTheme.PRIMARY,
  children: "Text",
};
Primary.decorators = [StoreDecorator({})];

export const Secondary = Template.bind({});
Secondary.args = {
  theme: AppLinkTheme.SECONDARY,
  children: "Text",
};

Secondary.decorators = [StoreDecorator({})];

export const Red = Template.bind({});
Red.args = {
  theme: AppLinkTheme.RED,
  children: "Text",
};
Red.decorators = [StoreDecorator({})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  theme: AppLinkTheme.PRIMARY,
  children: "Text",
};
PrimaryDark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  theme: AppLinkTheme.SECONDARY,
  children: "Text",
};
SecondaryDark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];

export const RedDark = Template.bind({});
RedDark.args = {
  theme: AppLinkTheme.RED,
  children: "Text",
};
RedDark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
