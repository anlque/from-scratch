import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/addCommentForm';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'shared/ui/Page/Page';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getCommentsIsLoading } from '../../model/selectors/comments';
import { articleCommentsReducer, getArticleComments } from '../../model/slice/articleCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
   className?: string;
}
const reducers: ReducersList = { articleComments: articleCommentsReducer };

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const { id } = useParams<{id:string}>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const comments = useSelector(getArticleComments.selectAll);

    const isLoading = useSelector(getCommentsIsLoading);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const onSendComment = useCallback((text:string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('not_found')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                    {t('back_to_list')}
                </Button>
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={t('comments')} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList comments={comments} isLoading={isLoading} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
