import { useParams } from 'react-router-dom';
import ARTICLES_QUERY from '../queries/article/articles'
import { IArticles, IArticlesResponse, IListProps } from '../types';
import Articles from './Articles';
import Query from './Query'

export default function ArticlesList(props: IListProps) {
  const {title, items} = props;
  let { slug } = useParams();
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <Query query={ARTICLES_QUERY} id={null} slug={slug}>
                    {({ data: { articles } }: IArticlesResponse) => {
                      const prop = items !== undefined? items : articles.data; 
                      return (
                          <Articles items={prop}/>
                        );
                    }}
            </Query>
        </div>
      </div>
    </div>
  )
}

