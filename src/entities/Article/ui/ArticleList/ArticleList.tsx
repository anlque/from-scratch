import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui/Text/Text';
import {
    List, WindowScroller, ListRowProps,
} from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/Page';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
   className?: string;
   articles: Article[]; // get from mother component to keep this one reusable,
   isLoading?: boolean;
   view?: ArticleView // type of display: list or tile;
   target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.TILE ? 9 : 3)
    .fill(0)
    .map((_, index) => <ArticleListItemSkeleton className={cls.card} key={index} view={view} />);

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className, articles, isLoading, view = ArticleView.LIST, target,
    } = props;
    const { t } = useTranslation('article');

    const isList = view === ArticleView.LIST;

    const itemsPerRow = isList ? 1 : 3;

    const rowCount = isList ? articles.length : Math.ceil(articles.length / itemsPerRow);

    const rowRenderer = ({ index, key, style } :ListRowProps) => {
        const items = [];

        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(<ArticleListItem
                article={articles[i]}
                view={view}
                className={cls.card}
                target={target}
                key={articles[i].id}
            />);
        }

        return (
            <div
                className={cls.row}
                key={key}
                style={style}
            >
                {items}
            </div>
        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('not_found')} />
            </div>
        );
    }

    return (
        <WindowScroller
            onScroll={() => console.log('scroll')}
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {({
                height,
                width,
                registerChild,
                onChildScroll,
                isScrolling,
                scrollTop,
            }) => (
                <div
                    className={classNames(cls.ArticleList, {}, [className, cls[view]])}
                    ref={registerChild}
                >
                    <List
                        height={height ?? 700}
                        rowCount={rowCount}
                        rowHeight={isList ? 700 : 330}
                        rowRenderer={rowRenderer}
                        width={width ? width - 80 : 700}
                        autoHeight
                        onScroll={onChildScroll}
                        isScrolling={isScrolling}
                        scrollTop={scrollTop}
                    />
                    {isLoading && getSkeletons(view)}
                </div>
            )}

        </WindowScroller>

    );
});
