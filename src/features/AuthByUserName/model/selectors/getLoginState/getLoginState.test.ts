import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
    it('should return state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'admin',
                password: '123',
                isLoading: true,
                error: undefined,
            },
        };
        expect(getLoginState(state as StateSchema)).toEqual(state);
    });
    it('with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginState(state as StateSchema)).toEqual(undefined);
    });
});
