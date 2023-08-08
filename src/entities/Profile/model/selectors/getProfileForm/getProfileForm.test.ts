import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm test', () => {
    it('should return counter value', () => {
        const formData = {
            first: 'Firstname',
            lastname: 'Lastname',
            age: 23,
            currency: Currency.UAH,
            country: Country.Ukraine,
            city: 'City',
            username: 'Admin',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: formData,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(formData);
    });

    it('with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
