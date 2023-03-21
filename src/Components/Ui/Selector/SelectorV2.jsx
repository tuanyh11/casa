import { useEffect, useRef, useState } from "react";

function SelectorV2({
  renderData,
  renderHeader, 
  title,
  defaultTitle = "defaultTitle",
  setTitle = () => {},
  onSelect = () => {},
  disabled,
  data =[],
  disPlayKey,
  isSelected = () => false
}) {
  const [isOpening, setIsOpening] = useState(false);


  const selectRef = useRef(null);

  useEffect(() => {
    if(!disabled ) {
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
    }
  }, [selectRef, disabled]);

  const handleOnSelect = (item) => {
    setTitle(item);
    onSelect(item);
  };

  return (
    <div ref={selectRef} className=" relative">
      {renderHeader ? (
        renderHeader()
      ) : (
        <button disabled={disabled} className="relative capitalize w-full text-start px-[30px] left-0 leading-[55px] h-[55px] bg-white  rounded-[28px] outline-none">
          <span className="text-[#444] font-medium">{title || defaultTitle}</span>
          <i className="fa-solid fa-angle-down absolute top-1/2 -translate-y-1/2 right-7 text-main-color  text-xs"></i>
        </button>
      )}
      {isOpening &&
        (renderData ? (
          renderData(data)
        ) : (
          <div style={{boxShadow: '0 0 0 1px rgb(68 68 68 / 11%)'}} className=" absolute z-[9999] mt-1 rounded-[5px] max-h-[200px] overflow-auto top-full bg-white left-0 right-0 bg-[0_0_0_1px_rgb(68_68_68/11%)] ">
            {data?.map((item, index) => (
              <div
                onClick={() => handleOnSelect(item)}
                className={`h-10 leading-10 pl-[18px] pr-[30px] cursor-pointer capitalize hover:bg-[#f6f6f6] transition-main ${
                  isSelected(item) ? "bg-[#f6f6f6] font-semibold" : ""
                }`}
                key={index}
              >
                {disPlayKey ? disPlayKey(item) : item.name}
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}

export default SelectorV2;
