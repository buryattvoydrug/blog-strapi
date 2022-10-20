import { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import CATEGORIES_QUERY from '../queries/category/categories';
import Query from './Query';
import { ICategoriesResponse } from '../types';


function CategoryListMobile () {
  return (
    <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }: ICategoriesResponse) => {

          return (
            <div>
              <nav className="uk-navbar-container" data-uk-navbar>
                <div className="uk-navbar-right">
                  <ul className="uk-navbar-nav">
                    {categories.data.map((category) => {
                      return (
                        <Disclosure.Button
                          key={category.attributes.slug}
                          as="a"
                          className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                        >
                          <Link
                            to={`/category/${category.attributes.slug}`}
                            className="uk-link-reset"
                          >
                            {category.attributes.name}
                          </Link>
                        </Disclosure.Button>
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

function CategoryListDesktop () {
  return (
    <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }: ICategoriesResponse) => {
          return (
            <div>
              <nav className="uk-navbar-container" data-uk-navbar>
                <div className="uk-navbar-right">
                  <ul className="uk-navbar-nav">
                    {categories.data.map((category) => {
                      return (
                        <Disclosure.Button
                          key={category.attributes.slug}
                          as="a"
                          className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                        >
                          <Link
                            to={`/category/${category.attributes.slug}`}
                            className="uk-link-reset"
                          >
                            {category.attributes.name}
                          </Link>
                        </Disclosure.Button>
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

export default function Categories() {
  return (

    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <span
                    className="block h-8 w-auto lg:hidden text-gray-300 font-bold"
                  >buryattvoyblog</span>
                  <span
                    className="hidden h-8 w-auto lg:block text-gray-300 font-bold"
                  >buryattvoyblog</span>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <CategoryListDesktop />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <CategoryListMobile />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>

    
  )
}
