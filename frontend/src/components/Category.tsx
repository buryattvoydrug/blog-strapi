import React from 'react'
import { useParams } from 'react-router-dom';
import CATEGORY_ARTICLES_QUERY from '../queries/category/articles';
import Articles from './Articles';
import ArticlesList from './ArticlesList';
import Query from './Query';

function List({prop}:any) {
  console.log(prop)
  return (
    <></>
  )
}

export default function Category() {
  let { slug } = useParams();
  return (
    <Query query={CATEGORY_ARTICLES_QUERY} slug={slug}>
      {({ data: { categories } }: any) => {
        if (categories.data.length) {
          return (
            <div>
              <div className="uk-section">
                <div className="uk-container uk-container-large">
                  <h1>{categories.data[0].attributes.name}</h1>
                  <Articles items={categories.data[0].attributes.articles.data} />
                </div>
              </div>
            </div>
          );
        }
      }}
    </Query>
  )
}
