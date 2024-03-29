import { classNames } from 'shared/lib/classNames/classNames';

import { ChangeEvent, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    readonly?: boolean;
    onChange?: (value: T)=> void
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className, label, options, value, readonly, onChange,
    } = props;

    const optionsList = useMemo(() => options?.map((opt) => (
        <option
            key={opt.value}
            value={opt.value}
            className={cls.option}
        >
            {opt.content}
        </option>
    )), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            {label && <span className={cls.label}>{label}</span>}
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
};
