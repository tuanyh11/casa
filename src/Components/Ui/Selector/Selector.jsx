import { useEffect, useRef, useState } from "react";

function Selector({
  renderData,
  renderHeader,
  data = [],
  title,
  setTitle = () => {},
  onSelect = () => {},
}) {
  const [isOpening, setIsOpening] = useState(false);

  const selectRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpening(false);
      }
    }

    function handleClickInside(event) {
      if (selectRef.current && selectRef.current.contains(event.target)) {
        setIsOpening((pre) => !pre);
      }
    }

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("click", handleClickInside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("click", handleClickInside);
    };
  }, [selectRef]);

  const handleOnSelect = (item) => {
    setTitle(item);
    onSelect(item);
  };

  return (
    <div ref={selectRef} className=" relative">
      {renderHeader ? (
        renderHeader()
      ) : (
        <div className="block relative cursor-pointer p-2.5 h-[50px] px-5 border border-[#e8e8e8]   outline-none w-full md:w-[250px]">
          {title}
          <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-xs"></i>
        </div>
      )}
      {isOpening &&
        (renderData ? (
          renderData(data)
        ) : (
          <div className=" absolute z-[9999] top-full bg-white left-0 right-0 bg-[0_0_0_1px_rgb(68_68_68/11%)] border">
            {data.map((item, index) => (
              <div
                onClick={() => handleOnSelect(item)}
                className={`h-10 leading-10 pl-[18px] pr-[30px] cursor-pointer ${
                  title === item?.name ? "bg-[#f6f6f6] font-bold" : ""
                }`}
                key={index}
              >
                {item.name}
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}

export default Selector;
