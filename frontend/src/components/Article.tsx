import React from 'react'
import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';
import { useParams } from 'react-router-dom';
import ARTICLES_QUERY from '../queries/article/articles';
import Query from './Query';

export default function Article() {
  let { slug } = useParams();

  return (
    <Query query={ARTICLES_QUERY} slug={slug}>
      {({ data: { articles } }:any) => {
        if (articles.data.length) {
          const imageUrl =
            process.env.NODE_ENV !== "development"
              ? articles.data[0].attributes.image.data.attributes.url
              : process.env.REACT_APP_BACKEND_URL +
                articles.data[0].attributes.image.data.attributes.url;

          return (
            <div>
              <div className="uk-card uk-card-muted">
                <div className="uk-card-media-top">
                  <img src={imageUrl} alt={articles.data[0].attributes.image.url} height="300" />
                </div>
                <div className="uk-card-body">
                  <p id="category" className="uk-text-uppercase">
                    {articles.data[0].attributes.category.data.attributes.name}
                  </p>
                  <p id="title" className="uk-text-large">
                    {articles.data[0].attributes.title}
                  </p>
                </div>
              </div>

              <div className="uk-section">
                <div className="uk-container uk-container-small">
                  {/* <ReactMarkdown source={articles.data[0].attributes.content} /> */}
                  <p>
                    <Moment format="MMM Do YYYY">
                      {articles.data[0].attributes.published_at}
                    </Moment>
                  </p>
                </div>
              </div>
            </div>
          );
        }
      }}
    </Query>
  )
}
