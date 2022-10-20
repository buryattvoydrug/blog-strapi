import React from 'react'
import Card from './Card'

export default function Articles({items}:any) {
  console.log(items);
  return (
    <>
    {items.map((item: any) => {
        return <Card article={item}/>
    })}
    </>
  )
}
