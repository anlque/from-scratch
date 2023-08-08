import { classNames } from 'shared/lib/classNames/classNames';

import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    readonly?: boolean;
    onChange?: (value: string)=> void
}

export const Select = memo((props: SelectProps) => {
    const {
        className, label, options, value, readonly, onChange,
    } = props;

    const optionsList = useMemo(() => options?.map((opt) => (
        <option
            key={opt.value}
            className={cls.option}
        >
            {opt.content}
        </option>
    )), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select
                value={value}
                className={cls.select}
                disabled={readonly}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    );
});
