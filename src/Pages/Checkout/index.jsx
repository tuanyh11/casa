import { useQuery } from "@tanstack/react-query";
import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { getProducts, getSidebarProduct } from "../../api";
import { Breadcrumb, InputV1, SelectorV3 } from "../../Components";
import Sidebar from "../Shop/Components/Sidebar";
import "./style.css";
import { getData } from "./utils";
import { Country, State } from "country-state-city";
import Content from "./Components/Content";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    watch,
    setError,
    reset
  } = useForm({
    mode: 'onBlur'
  });

  const {
    productsTrending: { data: products },
    sidebar: { data: sidebarData },
    // countries: { data: countries },
  } = getData({
    countries: {
      onSuccess: (data) => {
        setValue("country", data?.[0]);
      },
    },
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [search, setSearch] = useState("");

  const [openCoupon, setOpenCoupon] = useState(false);
  const [states, setStates] = useState([]);

  const cateProduct = sidebarData?.[0];
  const tagProduct = sidebarData?.[1];

  const selectedCountry = watch("country");

  const handleFilterCountries = (e, data) =>
    data.filter((country) =>
      e.target.value
        ? country.name.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0
        : true
    );

  const handleGetState = (item) => {
    return State.getStatesOfCountry(item?.isoCode);
  };


  const errorMessage = Object.entries(errors).map(([k, v]) => v);

  console.log(errorMessage);

  return (
    <div>
      <Breadcrumb label={"Check Out"} />
      <div className="my-[100px] checkout">
        <Content/>
      </div>
    </div>
  );
};

export default Checkout;


