import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileSlice, profileReducer, profileActions } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
    first: 'Firstname',
    lastname: 'Lastname',
    age: 23,
    currency: Currency.UAH,
    country: Country.Ukraine,
    city: 'City',
    username: 'Admin',
};

describe('profileSlice', () => {
    it('setReadonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: true };
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(false))).toEqual({ readonly: false });
    });
    it('cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });
    it('updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = { form: data };
        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: 'Admin' }))).toEqual({
            form: { ...data, username: 'Admin' },
        });
    });

    it('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };

        expect(profileReducer(state as ProfileSchema, updateProfileData.pending))
            .toEqual({
                isLoading: true,
                validateErrors: undefined,
            });
    });

    it('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')))
            .toEqual({
                isLoading: false,
                validateErrors: undefined,
                readonly: true,
                validateError: undefined,
                form: data,
                data,
            });
    });
});
