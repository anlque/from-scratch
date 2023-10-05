import { ArticleCommentsSchema } from './ArticleCommentsSchema';
import { ArticleRecommendationsSchema } from './ArticleRecommendationsSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleCommentsSchema;
    recommendations: ArticleRecommendationsSchema
}
