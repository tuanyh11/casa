import { useQueries } from "@tanstack/react-query";
import { getCountries, getProducts, getSidebarProduct } from "../../../api";

export const getData = ({ countries: { onSuccess = () => {} } }) => {
  const data = useQueries({
    queries: [
      {
        queryKey: ["get-all-products"],
        queryFn: () =>
          getProducts({
            start: 0,
            end: 2,
          }),
        refetchOnWindowFocus: false,
      },
      {
        queryKey: ["sidebar-shop"],
        queryFn: getSidebarProduct,
        refetchOnWindowFocus: false,
      },
      {
        queryKey: ["get-countries"],
        queryFn: getCountries,
        refetchOnWindowFocus: false,
        onSuccess,
      },
    ],
  });

  return {
    productsTrending: data[0],
    sidebar: data[1],
    countries: data[2],
  };
};
