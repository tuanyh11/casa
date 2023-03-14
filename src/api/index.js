

// product 

import instanceAxios from "./config"

export const searchProduct = async (text) => {
   const product =  await instanceAxios.get(`/products/search?q=${text}`)
    
   return product.data
}

export const getBlogById = async (id) => {
   const blog =  await instanceAxios.get(`http://localhost:4000/blog/detail`)
    
   return blog.data?.data?.post
}