import { StateSchema } from 'app/providers/StoreProvider';
import { getCommentsIsLoading, getCommentsError } from './comments';

describe('get article comments state', () => {
    it('get isLoading', () => {
        const data = {
            isLoading: true,
        };
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comments: data,
            },
        };

        expect(getCommentsIsLoading(state as StateSchema)).toBe(data.isLoading);
    });

    it('get error', () => {
        const data = {
            error: 'error',
        };
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comments: data,
            },
        };

        expect(getCommentsError(state as StateSchema)).toBe(data.error);
    });

    it('with empty data', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getCommentsError(state as StateSchema)).toEqual(undefined);
    });
});
