import { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from '../../model/types/article';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder:SortOrder)=> void;
    onChangeSort: (newSort:ArticleSortField)=> void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className, sort, order, onChangeOrder, onChangeSort,
    } = props;
    const { t } = useTranslation('articles-page');

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [{
        value: 'asc',
        content: t('asc'),
    }, {
        value: 'desc',
        content: t('desc'),
    }], [t]);

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [{
        value: ArticleSortField.CREATED,
        content: t('created_at'),
    }, {
        value: ArticleSortField.TITLE,
        content: t('title'),
    },
    {
        value: ArticleSortField.VIEWS,
        content: t('views'),
    },
    ], [t]);

    // const onChangeSortHandler = useCallback((newSort:string) => {
    //     onChangeSort(newSort as ArticleSortField);
    // }, [onChangeSort]);

    // const onChangeOrderHandler = useCallback((newOrder:string) => {
    //     onChangeOrder(newOrder as SortOrder);
    // }, [onChangeOrder]);

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select value={sort} options={sortFieldOptions} label={t('sort_by')} onChange={onChangeSort} />
            <Select
                className={cls.order}
                value={order}
                options={orderOptions}
                label={t('by')}
                onChange={onChangeOrder}
            />
        </div>
    );
});
