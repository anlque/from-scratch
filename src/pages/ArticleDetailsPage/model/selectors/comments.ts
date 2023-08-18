import { StateSchema } from 'app/providers/StoreProvider';

export const getCommentsIsLoading = (state: StateSchema) => state.articleComments?.isLoading;

export const getCommentsError = (state: StateSchema) => state.articleComments?.error;
