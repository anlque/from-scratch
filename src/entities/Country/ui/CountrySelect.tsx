import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Country } from '../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    readonly?: boolean;
    onChange?: (value: Country) => void
}

const options = [
    { value: Country.England, content: Country.England },
    { value: Country.Georgia, content: Country.Georgia },
    { value: Country.Norway, content: Country.Norway },
    { value: Country.Portugal, content: Country.Portugal },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className, value, readonly, onChange,
    } = props;
    const { t } = useTranslation();

    const handleChange = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('choose_country')}
            options={options}
            value={value}
            readonly={readonly}
            onChange={handleChange}
        />
    );
});
