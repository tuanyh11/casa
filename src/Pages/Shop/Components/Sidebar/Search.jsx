import React from 'react'
import { Link } from 'react-router-dom'

const Search = ({search, onSearch}) => {
  return (
    <div className="widget_product_search widget">
    <form className="woocommerce-product-search relative  ">
      <input
        type="text"
        className="search-field outline-none"
        placeholder="Search products…"
        value={search}
        onChange={onSearch}
      />
      <Link
        to={`/shop?search=${search}`}
        className=" text-black flex justify-center items-center"
      >
        <i className="fa-light fa-magnifying-glass " />
      </Link>
    </form>
  </div>
  )
}

export default Search