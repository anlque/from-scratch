import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileData } from './getProfileData';

describe('getProfileData test', () => {
    it('should return counter value', () => {
        const data = {
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
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    it('with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
