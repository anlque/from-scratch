import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between' | 'around'
export type FlexAlign = 'start' | 'center' | 'end'
export type FlexDirection = 'row' | 'column'

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
    around: cls.justifyAround,
};

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};

interface FlexProps {
   className?: string;
   children: ReactNode;
   justify?: FlexJustify;
   align?: FlexAlign;
   direction: FlexDirection
}

export const Flex = (props: FlexProps) => {
    const {
        className, children, justify = 'start', align = 'start', direction = 'row',
    } = props;

    const classes = [className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
    ];

    return (
        <div className={classNames(cls.Flex, {}, classes)}>
            {children}
        </div>
    );
};
