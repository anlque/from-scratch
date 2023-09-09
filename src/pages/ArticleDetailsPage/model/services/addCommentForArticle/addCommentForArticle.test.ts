import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk/TestAsyncThunk';
import { addCommentForArticle } from './addCommentForArticle';

const data = {
    id: '1',
    user: {
        id: '1',
        username: 'username',
    },
    text: 'string',
};

describe('addCommentForArticle', () => {
    it('success', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {
            articleComments: {
                data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('1');
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    // it('error', async () => {
    //     const thunk = new TestAsyncThunk(addCommentForArticle, {
    //         profile: {
    //             form: data,
    //         },
    //     });
    //     thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    //     const result = await thunk.callThunk('1');

    //     expect(result.meta.requestStatus).toBe('rejected');
    //     // expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    // });

    // it('validate error', async () => {
    //     const thunk = new TestAsyncThunk(addCommentForArticle, {
    //         profile: { form: { ...data, first: '' } },
    //     });
    //     thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    //     const result = await thunk.callThunk('1');
    //     expect(thunk.api.put).not.toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('rejected');
    //     // expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    // });
});
