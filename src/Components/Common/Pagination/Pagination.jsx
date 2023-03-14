import React, { useState } from 'react';

const Pagination = ({ items = 2, itemToShow = 2, getOffset = () => { } }) => {
    const [currentPage, setCurrentPage] = useState(0);

    let start = currentPage - 1;
    let end = currentPage + 1;

    if (start < 0) {
        start = 0;
        end = 2;
    }

    const pages = [...Array(Math.ceil(items / itemToShow)).keys()];

    const showPages = pages.slice(start, end);

    const handleOnSetPage = (type) => {
        let nextPage = 0;
        if (type === "incr") {
            nextPage =
                currentPage + 1 > pages.length - 1 ? currentPage : currentPage + 1;
            setCurrentPage(nextPage);
        } else {
            nextPage = currentPage - 1 < 0 ? currentPage : currentPage - 1
            setCurrentPage(nextPage);
        }

        getOffset(nextPage * itemToShow, (nextPage * itemToShow) + itemToShow);
    };

    const handleOnOffsetChange = (nextPage) => {
        setCurrentPage(nextPage)
        getOffset(nextPage * itemToShow, (nextPage * itemToShow) + itemToShow);

    }

    const isLastPage = currentPage === pages.length - 1;
    const isFirstPage = currentPage - 2 >= 0;
    if (pages.length === 1) return <></>
    // console.log(items);
    return (
        <div >
            <ul className="flex">
                {isFirstPage ? (
                    <li>
                        <PagiButton onSetpage={() => handleOnSetPage()}>
                            <i className="fa-solid fa-angle-left"></i>
                        </PagiButton>
                    </li>
                ) : null}
                {showPages.map((page, index) => (
                    <li key={index}>
                        {
                            <PagiButton
                                key={index}
                                onSetpage={() => handleOnOffsetChange(page)}
                                isCurrentPage={currentPage === page}
                                page={page}
                            />
                        }
                    </li>
                ))}

                {!isLastPage ? (
                    <li>
                        <PagiButton onSetpage={() => handleOnSetPage("incr")}>
                            <i className="fa-solid fa-angle-right"></i>
                        </PagiButton>
                    </li>
                ) : null}
            </ul>
        </div>
    );
};
function PagiButton({
    onSetpage = () => { },
    isCurrentPage = 0,
    page = 0,
    children,
}) {
    return (
        <div className="w-[50px] h-[50px] md:w-20 md:h-20 p-[10px] border rounded-full mx-[5px] first:ml-0 ">
            <button
                onClick={() => onSetpage()}
                className={`w-[30px] h-[30px] md:w-[60px] md:h-[60px] flex justify-center items-center rounded-full leading-[60px]  ${isCurrentPage
                    ? "bg-main-color text-white"
                    : "bg-[rgba(7,7,25,0.1)] text-[#5b5858]"
                    } text-center  hover:bg-main-color transition-all  hover:text-white`}
            >
                {children || page + 1}
            </button>
        </div>
    );
}
export default Pagination;