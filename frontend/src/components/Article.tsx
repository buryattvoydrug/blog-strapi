import React from 'react'
import Moment from 'react-moment';
import { useParams } from 'react-router-dom';
import ARTICLE_QUERY from '../queries/article/article';
import Query from './Query';

export default function Article() {
  let { slug } = useParams();

  return (
    <Query query={ARTICLE_QUERY} slug={slug}>
      {({ data: { articles } }:any) => {
        if (articles.data.length) {
          const imageUrl =
            process.env.NODE_ENV !== "development"
              ? articles.data[0].attributes.image.data.attributes.url
              : process.env.REACT_APP_BACKEND_URL +
                articles.data[0].attributes.image.data.attributes.url;

          return (
            <div>
                  <img src={imageUrl} alt={articles.data[0].attributes.image.url} height="300" />
                  <p id="category" className="uk-text-uppercase">
                    {articles.data[0].attributes.category.data.attributes.name}
                  </p>
                  <p id="title" className="text-3xl font-bold underline">
                    {articles.data[0].attributes.title}
                  </p>

              <div className="uk-section">
                  <p>
                    <Moment format="MMM Do YYYY">
                      {articles.data[0].attributes.published_at}
                    </Moment>
                  </p>
              </div>
            </div>
          );
        }
      }}
    </Query>
  )
}
