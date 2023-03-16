

// product 

import instanceAxios from "./config"

export const searchProduct = async (text) => {
   const product =  await instanceAxios.get(`/products/search?q=${text}`)
   return product.data
}


export const getProduct = async (query) => {
   const product =  await instanceAxios.get(`/products?${new URLSearchParams(query).toString()}`)
    
   return product.data?.[0]
}

export const getProductCate = async (query) => {
   const cate =  await instanceAxios.get(`/product-cate`)
    
   return cate.data
}

export const getProductTag = async (query) => {
   const tag =  await instanceAxios.get(`/product-tag`)
    
   return tag.data
}

export const getSidebarProduct = async () => {

   const data =  await Promise.all([getProductCate(), getProductTag()])
   return data
}


export const getProducts = async (limit = 7) => {
   const product = await instanceAxios.get(`/products?_start=0&_limit=${limit}`)
   return product.data
}


// end product

// blog
export const getBlogById = async (id) => {
   const blog = await instanceAxios.get(`http://localhost:4000/blogs?id=${id}`)
   return blog.data?.[0]
}

export const getCategoryBlog = async () => {
   const blog = await instanceAxios.get(`http://localhost:4000/categories-blog`)
   return blog.data
}

export const getTagBlog = async () => {
   const blog = await instanceAxios.get(`http://localhost:4000/tags-blog`)
   return blog.data
}

export const getSidebarBlogData = async () => {

   const data = await Promise.all([getCategoryBlog(), getTagBlog()])
   return data
}

export const createBlogComment = async (data) => {
   await instanceAxios.post(`http://localhost:4000/blog/comments`, data)
}

// end blog

// contact

export const createContact = async (data) => {
   await instanceAxios.post(`http://localhost:4000/contact`, data)
}

