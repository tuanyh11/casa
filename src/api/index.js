

// product 

import instanceAxios from "./config"

export const searchProduct = async (text) => {
   const product = await instanceAxios.get(`/products/search?q=${text}`)

   return product.data
}

export const getProduct = async (query) => {
   const product = await instanceAxios.get(`/products?${new URLSearchParams({ query }).toString()}`)

   return product.data
}

export const getProducts = async (limit) => {
   const product = await instanceAxios.get(`/products?_start=0&_limit=${limit}`)
   return product.data
}
export const getProductsCate = async (limit) => {
   const product = await instanceAxios.get(`http://localhost:4000/product-cate?_start=0&_limit=${limit}`)
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
export const getListBlog = async (limit) => {
   if (limit) {
      const blog = await instanceAxios.get(`http://localhost:4000/blogs?_start=0&_limit=${limit}`)
      return blog.data
   }
   const blog = await instanceAxios.get(`http://localhost:4000/blogs`)
   return blog.data
}
// end blog

// contact

export const createContact = async (data) => {
   await instanceAxios.post(`http://localhost:4000/contact`, data)
}

// our-team-home
export const getOurTeamHome = async () => {
   const ourteam = await instanceAxios.get(`http://localhost:4000/our-team-home`)
   return ourteam.data
}
export const getLogoHome = async () => {
   const logo = await instanceAxios.get(`http://localhost:4000/logo-home`)
   return logo.data
}
export const getCategoryHome = async () => {
   const category = await instanceAxios.get(`http://localhost:4000/category-home`)
   return category.data
}
export const getBannerHome = async () => {
   const banner = await instanceAxios.get(`http://localhost:4000/banner-home`)
   return banner.data
}