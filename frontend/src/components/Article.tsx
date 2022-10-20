import React from 'react'
import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';
import { useParams } from 'react-router-dom';
import rehypeRaw from 'rehype-raw';
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
          const authorImageUrl =
            process.env.NODE_ENV !== "development"
              ? articles.data[0].attributes.author.data.attributes.picture.data.attributes.url
              : process.env.REACT_APP_BACKEND_URL +
                articles.data[0].attributes.author.data.attributes.picture.data.attributes.url;
          console.log(articles.data[0].attributes)
          return (
            <div className="bg-white">
              <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <p id="category" className="pl-5 font-black">
                      {articles.data[0].attributes.category.data.attributes.name}
                    </p>
                    <p className="p-5 text-5xl font-bold tracking-tight text-gray-900">
                      {articles.data[0].attributes.title}
                    </p>
                    <p className="p-5 text-xl font-medium tracking-tight text-gray-900">
                      {articles.data[0].attributes.description}
                    </p>
                    <p className="p-5 text-l font-normal tracking-tight text-gray-900">
                      <ReactMarkdown children={articles.data[0].attributes.content} rehypePlugins={[rehypeRaw]}/>
                    </p>
                    <img className="p-5 tracking-tight" src={imageUrl} alt={articles.data[0].attributes.image.url} height="300" />
                    <div className="p-5 flex -space-x-1 overflow-hidden">
                      <img
                        className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                        src={authorImageUrl}
                        alt=""
                      />
                      <p className="text-l pl-3 pr-10 font-bold tracking-tight text-gray-900 font-light">
                        {articles.data[0].attributes.author.data.attributes.name}
                      </p>
                      <Moment format="MMM Do YYYY">
                        {articles.data[0].attributes.published_at}
                      </Moment>
                    </div>
              </div>
            </div>
          );
        }
      }}
    </Query>
  )
}
