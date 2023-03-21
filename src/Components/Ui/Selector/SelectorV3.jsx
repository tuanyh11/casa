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

  const [dataRender, setDataRender] = useState(data);

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

    setDataRender(data);
  }, [selectRef, disabled]);

  useEffect(() => {
    setDataRender(data);
  }, [isOpening]);

  const handleOnSelect = (item) => {
    setTitle(item);
    onSelect(item);
  };

  const handleOnSearched = (e) => {
    setDataRender([...onSearch(e)]);
  };

  return (
    <div ref={selectRef} className=" ">
      {renderHeader ? (
        renderHeader()
      ) : (
        <div>
          <div className="font-normal relative">
            <div>
              <label
                className="block w-full mb-[5px] capitalize font-semibold leading-[2]"
                htmlFor=""
              >
                {label} &nbsp;
                <abbr className="text-[red] font-bold">*</abbr>{" "}
              </label>
              <div
                type="button"
                className={`w-full relative border-[1px] cursor-pointer  leading-[46px] ${
                  isOpening ? " border-b-0" : ""
                } border-[#ccc] h-[46px] px-[20px]  focus:outline-none text-[#666]`}
              >
                {title}
                <i className="fa-duotone fa-caret-down absolute top-1/2 -translate-y-1/2 right-4 text-[#222] font-bold  text-xs"></i>
              </div>
            </div>
            {isOpening &&
              (renderData ? (
                renderData(data)
              ) : (
                <div className="top-full absolute z-[9999] bg-white left-0 right-0 border-[#ccc] border border-t-0 bg-[0_0_0_1px_rgb(68_68_68/11%)] ">
                  <div className="p-1">
                    <input
                      type="text"
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) => handleOnSearched(e)}
                      className={`w-full relative border-[1px] border-[#ccc] ${
                        isOpening ? " " : ""
                      }  h-[50px] p-[4px]  focus:outline-none text-[#666]`}
                    />
                  </div>

                  {dataRender.length > 0 ? (
                    <div className="  max-h-[200px] overflow-auto  ">
                      {dataRender?.map((item, index) => (
                        <div
                          onClick={() => handleOnSelect(item)}
                          className={` p-[6px]  pr-[30px] cursor-pointer capitalize hover:bg-[#0073aa] hover:text-white  ${
                            isSelected(item) ? "bg-[#ddd] " : ""
                          }`}
                          key={index}
                        >
                          {disPlayKey && disPlayKey(item)}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className={`p-[6px] pr-[30px] cursor-pointer capitalize   `}
                    >
                      Not matches found
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SelectorV3;
