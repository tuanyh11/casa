import React, { useRef, useState } from "react";
import { useClickInsideOutside } from "../../../../hooks";

const Search = ({
  onOpenSearch,
  onTextSearch,
  isDebounced,
  isFetching,
  isOpenSearch,
  data,
  textSearch,
  listProduct
}) => {
  const resultRef = useRef(null);
  const [openResultSearch, setOpenResultSearch] = useState(false);

  useClickInsideOutside(resultRef, () => {}, handleClickOutside);

  function handleClickOutside() {
    setOpenResultSearch(false);
  }

  
  const handleOnBlur = (e) => {
    onTextSearch(textSearch || null);
  };

  const handleOnFocus = () => {
    setOpenResultSearch(true);
    onTextSearch(textSearch || "");
  };


  return (
    <>
      <div>
        {isOpenSearch ? (
          <i
            onClick={() => onOpenSearch(false)}
            className="fa-sharp fa-regular fa-xmark !transition transition-main hover:text-main text-[22px] cursor-pointer "
          ></i>
        ) : (
          <i
            onClick={() => onOpenSearch(true)}
            className="fa-light transition-main !transition hover:text-main  fa-magnifying-glass cursor-pointer"
          ></i>
        )}
      </div>
      <div
        className={`search-form-wrap ${
          isOpenSearch ? "!mt-0 !opacity-100 !visible" : ""
        }`}
      >
        <form
          ref={resultRef}
          className={`search-form live-search-on ${
            openResultSearch ? "active" : ""
          }`}
        >
          <input
            value={textSearch === null ? "Type search text here..." : textSearch}
            type="text"
            onChange={(e) => onTextSearch(e.target.value)}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            className="text-[14px] !text-black-#303030 px-[25px] !h-[46px] !leading-[46px] md:px-[30px] md:!h-[60px] md:!leading-[60px] "
          />
          <div className=" submit-form ">
            <button
              type="button"
              className="fa-light submit-form fa-magnifying-glass  !text-xl !text-black-#303030"
            />
          </div>
          <div className="list-product-search ">
            {isDebounced || isFetching ? (
              <div className="text-center">
                <i className="fa-solid fa-spinner animate-spin"></i>
              </div>
            ) : data?.length > 0 ? (
              listProduct
            ) : (
              <p className="text-center">
                {data?.length === 0
                  ? "No any results with this keyword."
                  : "Please enter key search to display results."}
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;
