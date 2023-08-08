import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from '../../types/profile';
import { validateProfileData } from './validateProfileData';

describe('validateProfileData', () => {
    const data = {
        first: 'Firstname',
        lastname: 'Lastname',
        age: 23,
        currency: Currency.UAH,
        country: Country.Ukraine,
        city: 'City',
        username: 'Admin',
    };
    it('validation passed', () => {
        const result = validateProfileData(data);
        expect(result).toHaveLength(0);
    });
    it('incorrect user data, no firstname', () => {
        const result = validateProfileData({ ...data, first: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    it('incorrect user data, no lastname', () => {
        const result = validateProfileData({ ...data, lastname: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    it('incorrect age', () => {
        const result = validateProfileData({ ...data, age: 0 });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    it('incorrect region', () => {
        const result = validateProfileData({ ...data, city: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_REGION]);
    });
    it('no data', () => {
        expect(validateProfileData(undefined)).toEqual([ValidateProfileError.NO_DATA]);
    });
    it('everything is incorrect', () => {
        expect(validateProfileData({})).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_REGION,
        ]);
    });
});
