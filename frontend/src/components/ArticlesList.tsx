import React from 'react'
import ARTICLES_QUERY from '../queries/article/articles'
import Article from './Article';
import Query from './Query'

export default function ArticlesList() {
  console.log('k')
  return (
    <Query query={ARTICLES_QUERY} id={null}>
            {({ data: { articles } }:any) => {
              return (
                <>
                  {articles.data.map((article:any) => {
                    return <Article article={article}/>
                  })}
                </>
                );
            }}
    </Query>
  )
}
