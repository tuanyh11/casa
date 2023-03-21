// product

import instanceAxios from "./config";

export const searchProduct = async (text) => {
  const product = await instanceAxios.get(`/products/search?q=${text}`);
  return product.data;
};

export const getProduct = async (query) => {
  const product = await instanceAxios.get(
    `/products?${new URLSearchParams(query).toString()}`
  );

  return product.data?.[0];
};

export const getProductCate = async (query) => {
  const cate = await instanceAxios.get(`/product-cate`);

  return cate.data;
};

export const getProductTag = async (query) => {
  const tag = await instanceAxios.get(`/product-tag`);

  return tag.data;
};

export const getSidebarProduct = async () => {
  const data = await Promise.all([getProductCate(), getProductTag()]);
  return data;
};

export const getProducts = async (paginate) => {
  if (paginate) {
    const product = await instanceAxios.get(
      `/products?_start=${paginate?.start}&_limit=${paginate.end}`
    );
    return product.data;
  }

  const product = await instanceAxios.get(`/products`);
  return product.data;
};

export const  getSaleProducts = async () =>   {
  const products = await instanceAxios.get("/products/sales")
  console.log(products);
  return products.data
}

export const getProductsCate = async (limit) => {
  const product = await instanceAxios.get(
    `http://localhost:4000/product-cate?_start=0&_limit=${limit}`
  );
  return product.data;
};

// end product

// blog
export const getBlogById = async (id) => {
  const blog = await instanceAxios.get(`http://localhost:4000/blogs?id=${id}`);
  return blog.data?.[0];
};

export const getCategoryBlog = async () => {
  const blog = await instanceAxios.get(`http://localhost:4000/categories-blog`);
  return blog.data;
};

export const getTagBlog = async () => {
  const blog = await instanceAxios.get(`http://localhost:4000/tags-blog`);
  return blog.data;
};

export const getSidebarBlogData = async () => {
  const data = await Promise.all([getCategoryBlog(), getTagBlog()]);
  return data;
};

export const createBlogComment = async (data) => {
  await instanceAxios.post(`http://localhost:4000/blog/comments`, data);
};

export const getListBlog = async (limit = 7) => {
  const blog = await instanceAxios.get(
    `http://localhost:4000/blogs?_start=0&_limit=${limit}`
  );
  return blog.data;
};

export const getRelateBlog = async (id) => {
  const relatedBlog = await instanceAxios.get(`/blogs/${id}/related`)
  return relatedBlog.data;
}

// end blog

// contact

export const createContact = async (data) => {
  await instanceAxios.post(`http://localhost:4000/contact`, data);
};

// our-team-home
export const getOurTeamHome = async () => {
  const ourteam = await instanceAxios.get(
    `http://localhost:4000/our-team-home`
  );
  return ourteam.data;
};
export const getLogoHome = async () => {
  const logo = await instanceAxios.get(`http://localhost:4000/logo-home`);
  return logo.data;
};
export const getCategoryHome = async () => {
  const category = await instanceAxios.get(
    `http://localhost:4000/category-home`
  );
  return category.data;
};
