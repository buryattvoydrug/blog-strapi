import React from 'react'
import { IArticle, IArticles, IListProps } from '../types'
import Card from './Card'

export default function Articles(props: IListProps) {
  const { items } = props;
  return (
    <>
    {items && items.map((item) => {
        return <Card key={item.attributes.slug} article={item}/> 
    })}
    </>
  )
}
