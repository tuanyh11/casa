import React from 'react'
import Author from './Author'
import Category from './Category'
import Instagram from './Instagram'
import RelateProduct from './RelateProduct'
import Tags from './Tags'

const Sidebar = () => {
  return (
    <div>

      <Author/>

      <Category/>

      <Tags/>

      <RelateProduct/>

      <Instagram/>
    </div>
  )
}

export default Sidebar