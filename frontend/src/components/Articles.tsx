import React from 'react'
import Card from './Card'

export default function Articles({items}:any) {
  console.log(items);
  return (
    <>
      {items.map((article:any) => {
        return <Card article={article}/>
      })}
    </>
  )
}
