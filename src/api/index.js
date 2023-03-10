

// product 

import instanceAxios from "./config"

export const searchProduct = async (text) => {
   const product =  await instanceAxios.get(`/products/search?q=${text}`)
    
   return product.data
}