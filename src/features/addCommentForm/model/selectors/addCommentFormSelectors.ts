import { StateSchema } from 'app/providers/StoreProvider';

export const getAddCommentFormText = (state:StateSchema) => state.addCommentForm?.text ?? ''; // ?? do not react to false properties e.g. 0 only to null && undefined
export const getAddCommentFormError = (state:StateSchema) => state.addCommentForm?.error;
