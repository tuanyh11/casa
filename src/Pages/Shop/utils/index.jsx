import currency from "currency.js";
import { Link } from "react-router-dom";

export function filterProductBySidebar(products, obj, setShowProducts) {
  return () => {
    if (products) {
      if (obj?.cate) {
        return setShowProducts([
          ...products?.filter((product) =>
            product.productCategories?.nodes?.some(
              (cate) => cate.slug === obj?.cate?.toLocaleLowerCase()
            )
          ),
        ]);
      }

      if (obj?.tag) {
        return setShowProducts([
          ...products?.filter((product) =>
            product.productTags?.nodes?.some((tag) => tag.slug === obj?.tag)
          ),
        ]);
      }

      if (obj?.min && obj?.max) {
        return setShowProducts([
          ...products?.filter((p) => {
            const price = currency(p.price || p.regularPrice).value;

            return price >= obj?.min && price <= obj?.max;
          }),
        ]);
      }

      if (obj?.search) {
        return setShowProducts([
          ...products?.filter((product) =>
            product?.name
              ?.toLocaleLowerCase()
              ?.includes(obj?.search.toLowerCase())
          ),
        ]);
      }
    }
  };
}

export const getPathBreadcrumbs = (query) => {
  if (query?.cate) {
    return {
      title: query.cate,
      element: (
        <>
          <Link to="/">Home</Link>
          <span>{query.cate}</span>
        </>
      ),
    };
  }

  if (query?.tag) {
    return {
      title: query.tag,
      element: (
        <>
          <Link to="/">Home</Link>
          <span className="!normal-case">{`Products tagged "${query.tag}"`}</span>
        </>
      ),
    };
  }

  if (query?.search) {
    return {
      title: null,
      element: (
        <>
          <Link to="/">Home</Link>
          <span className=" !normal-case">{`Search results for "${query.search}"`}</span>
        </>
      ),
    };
  }
  return null;
};
