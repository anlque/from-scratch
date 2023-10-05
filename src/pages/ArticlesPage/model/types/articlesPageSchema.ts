import { EntityState } from '@reduxjs/toolkit';
import {
    Article, ArticleView, ArticleType, ArticleSortField,
} from 'entities/Article';
import { SortOrder } from 'shared/types';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
    // pagination
    page: number;
    limit: number;
    hasMore: boolean

    _inited: boolean // _ `cause field is not changable (only one time after initialization)

    // filters
    view: ArticleView;
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType
}
