import { ComponentMeta, ComponentStory } from "@storybook/react";
import ArticlesPage from "./ArticlesPage";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ArticleSortField, ArticleType, ArticleView } from "entities/Article";

export default {
  title: "pages/Article/ArticlesPage",
  component: ArticlesPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => (
  <ArticlesPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

Normal.decorators = [
  StoreDecorator({
    articlesPage: {
      isLoading: false,
      error: undefined,
      page: 1,
      limit: 5,
      hasMore: false,

      _inited: true,

      view: ArticleView.LIST,
      order: "asc",
      sort: ArticleSortField.TITLE,
      search: "",
      type: ArticleType.ALL,
    },
  }),
];
