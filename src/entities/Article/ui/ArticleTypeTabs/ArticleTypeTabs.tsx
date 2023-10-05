import { memo, useMemo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from 'entities/Article/model/types/article';

interface ArticleTypeTabsProps {
   className?: string;
   value: ArticleType;
   onChangeType: (type:ArticleType)=>void
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation('articles-page');

    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('types.all'),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('types.economics'),
        },
        {
            value: ArticleType.IT,
            content: t('types.it'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('types.science'),
        },
    ], [t]);

    const onTabClick = useCallback((tab:TabItem) => {
        onChangeType(tab.value as ArticleType);
    }, [onChangeType]);

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
            className={classNames('', {}, [className])}
        />

    );
});