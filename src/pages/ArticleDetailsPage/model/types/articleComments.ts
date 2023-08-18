import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';

export interface ArticleCommentsSchema extends EntityState<Comment> {
    data?: Comment;
    isLoading: boolean;
    error?: string
}
