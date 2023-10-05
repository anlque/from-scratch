import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
    it('one param', () => {
        const params = getQueryParams({
            test: 'value',
        });
        expect(params).toBe('?test=value');
    });

    it('multiple params', () => {
        const params = getQueryParams({
            test1: 'value1',
            test2: 'value2',
        });

        expect(params).toBe('?test1=value1&test2=value2');
    });

    it('undefined param', () => {
        const params = getQueryParams({
            test1: 'value1',
            test2: undefined,
        });
        expect(params).toEqual('?test1=value1');
    });
});
