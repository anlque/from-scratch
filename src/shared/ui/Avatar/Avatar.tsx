import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, useRef } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string
}

export const Avatar = ({
    className, src, size, alt,
}: AvatarProps) => {
    const mods = {};
    const { current: styles } = useRef<CSSProperties>({
        width: size || 100,
        height: size || 100,
    });

    return (
        <img
            src={src}
            style={styles}
            alt={alt}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};
