import React from 'react'
import { Link } from 'react-router-dom';
import CATEGORIES_QUERY from '../queries/category/categories';
import Query from './Query';

export default function Categories() {
  return (
    <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }:any) => {
          return (
            <div>
              <nav className="uk-navbar-container" data-uk-navbar>
                <div className="uk-navbar-right">
                  <ul className="uk-navbar-nav">
                    {categories.data.map((category:any) => {
                      return (
                        <li key={category.attributes.slug}>
                          <Link
                            to={`/category/${category.attributes.slug}`}
                            className="uk-link-reset"
                          >
                            {category.attributes.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </nav>
            </div>
          );
        }}
      </Query>
  )
}
