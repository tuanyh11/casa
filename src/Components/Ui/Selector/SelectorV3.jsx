import { useEffect, useRef, useState } from "react";

function SelectorV3({
  renderData,
  renderHeader,
  title,
  setTitle = () => {},
  onSelect = () => {},
  disabled,
  data = [],
  disPlayKey,
  label,
  isSelected = () => false,
  onSearch = () => {},
}) {
  const [isOpening, setIsOpening] = useState(false);

  const [dataRender, setDataRender] = useState(data)

  const selectRef = useRef(null);

  useEffect(() => {
    if (!disabled) {
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

    setDataRender(data)
  }, [selectRef, disabled]);


  useEffect(() => {
    setDataRender(data)

  }, [isOpening])

  const handleOnSelect = (item) => {
    setTitle(item);
    onSelect(item);
  };

  const handleOnSearched = (e) => {
    setDataRender([...onSearch(e)])
  }


  return (
    <div ref={selectRef} className=" ">
      {renderHeader ? (
        renderHeader()
      ) : (
        <div>
          <div className="font-normal relative">
            <div>
              {label} &nbsp;
              <span
                className="text-main-color"
                style={{ textDecoration: "underline dotted" }}
              >
                *
              </span>
              <div
                type="button"
                className={`w-full relative border-[1px] cursor-pointer leading-[50px] ${
                  isOpening ? " border-b-0" : ""
                } border-[#eaeaea] h-[50px] px-[20px]  focus:outline-none text-[#000]`}
              >
                {title}
                <i className="fa-duotone fa-caret-down absolute top-1/2 -translate-y-1/2 right-1  text-xs"></i>
              </div>
            </div>
            {isOpening &&
              (renderData ? (
                renderData(data)
              ) : (
                <div className="top-full absolute z-[9999] bg-white left-0 right-0 border border-t-0 bg-[0_0_0_1px_rgb(68_68_68/11%)] ">
                  <div className="p-1">
                    <input
                      type="text"
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) => handleOnSearched(e)}
                      className={`w-full relative border-[1px] border-[#eaeaea] ${
                        isOpening ? " " : ""
                      }  h-[50px] px-[20px]  focus:outline-none text-[#000]`}
                    />
                  </div>
                  <div className="  max-h-[200px] overflow-auto  scrollbar-none">
                    {dataRender?.map((item, index) => (
                      <div
                        onClick={() => handleOnSelect(item)}
                        className={`h-10 leading-10 pl-[18px] pr-[30px] cursor-pointer capitalize hover:bg-[#0073aa] hover:text-white  ${
                          isSelected(item) ? "bg-[#f6f6f6] font-semibold" : ""
                        }`}
                        key={index}
                      >
                        {disPlayKey && disPlayKey(item)}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SelectorV3;
