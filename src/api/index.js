

// product 

import instanceAxios from "./config"

export const searchProduct = async (text) => {
   const product =  await instanceAxios.get(`/products/search?q=${text}`)
    
   return product.data
}

export const getBlogById = async (id) => {
   const blog =  await instanceAxios.get(`http://localhost:4000/blogs?id=${id}`)
   return blog.data?.[0]
}

export const getCategoryBlog = async () => {
   const blog =  await instanceAxios.get(`http://localhost:4000/categories-blog`)
   return blog.data
}

export const getTagBlog = async () => {
   const blog =  await instanceAxios.get(`http://localhost:4000/tags-blog`)
   return blog.data
}

export const getSidebarBlogData = async () => {

   const data =  await Promise.all([getCategoryBlog(), getTagBlog()])
   return data
}