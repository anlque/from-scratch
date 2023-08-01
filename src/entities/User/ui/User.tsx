import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './User.module.scss';

interface UserProps {
    className?: string;
}

export const User = memo(({ className }: UserProps) => (
    <div className={classNames(cls.User, {}, [className])} />
));
