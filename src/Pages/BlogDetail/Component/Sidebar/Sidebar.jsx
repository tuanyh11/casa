import React from 'react'
import Author from './Author'
import Category from './Category'
import Instagram from './Instagram'
import RelateProduct from './RelateProduct'
import Tags from './Tags'

const Sidebar = ({data}) => {

  
  return (
    <div>

      <Author data={data?.author}/>

      <Category data={data?.cate}/>

      <Tags data={data?.tags}/>

      <RelateProduct/>

      <Instagram/>
    </div>
  )
}

export default Sidebar