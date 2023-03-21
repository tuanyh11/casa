import { useQuery } from '@tanstack/react-query';
import React, { useMemo, useState } from 'react';
import { useLocation } from 'react-router';
import { getListBlog } from '../../api';
import { Breadcrumb, Pagination } from '../../Components';
import BlogItem from './BlogItem/BlogItem';
import './style.css';

let PageSize = 5;

function BlogList(props) {

    const { data } = useQuery({
        queryKey: ['blog-list'],
        queryFn: () => getListBlog()
    })
    // let dt = [];
    // if (data !== undefined) {
    //     dt = data
    // }
    // console.log(dt)
    const loc = useLocation();
    // console.log(loc.pathname);
    const pathname = loc.pathname.substring(1).split("/");

    // // Pagination
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data?.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, data]);
    console.log(data);
    return (
        <div className='blog-list-main'>
            <Breadcrumb
                label={pathname}
            />
            <div className='blog-list-wapper my-[100px]'>
                <div className='blog-list-container max-w-[1320px] m-auto relative w-full px-[15px]'>
                    <div className='blog-list-view'>
                        {currentTableData?.map((item, index) => (
                            <BlogItem data={item} key={index} />
                        ))}

                    </div>
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={data?.length}
                        pageSize={PageSize}
                        onPageChange={(page) => setCurrentPage(page)}
                    />
                </div>
            </div>

        </div>
    );
}

export default BlogList;