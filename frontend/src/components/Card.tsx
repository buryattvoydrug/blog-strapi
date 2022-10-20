import React from 'react'
import { Link } from 'react-router-dom';

export default function Card({article}:any) {
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? article.attributes.image.data.attributes.url
      : process.env.REACT_APP_BACKEND_URL +
        article.attributes.image.data.attributes.url;
  return (
    
    <Link to={`/article/${article.attributes.slug}`} className="uk-link-reset">
      <div key={article.attributes.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={imageUrl}
                  alt={article.attributes.image.url}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {article.attributes.title}
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">{article.attributes.category.data.attributes.name}</p>
              </div>
            </div>
    </Link>
  )
}
