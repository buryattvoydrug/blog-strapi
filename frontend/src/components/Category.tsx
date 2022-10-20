import { useParams } from 'react-router-dom';
import CATEGORY_ARTICLES_QUERY from '../queries/category/articles';
import { ICategoryResponse } from '../types';
import ArticlesList from './ArticlesList';
import Query from './Query';

export default function Category() {
  let { slug } = useParams();
  return (
    <Query query={CATEGORY_ARTICLES_QUERY} slug={slug}>
      {({ data: { categories } }: ICategoryResponse) => {
        if (categories.data.length) {
          return (
                  <ArticlesList title={categories.data[0].attributes.name} 
                                items={categories.data[0].attributes.articles.data}/>
          );
        }
      }}
    </Query>
  )
}
