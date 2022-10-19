import React from 'react'
import { useParams } from 'react-router-dom';
import ARTICLES_QUERY from '../queries/article/articles'
import Articles from './Articles';
import Card from './Card';
import Query from './Query'

export default function ArticlesList() {
  let { slug } = useParams();
  console.log('k')
  return (
    <Query query={ARTICLES_QUERY} id={null} slug={slug}>
            {({ data: { articles } }:any) => {
              return (
                <>
                  <Articles items={articles.data}/>
                </>
                );
            }}
    </Query>
  )
}
