import { useQuery } from '@tanstack/react-query';
import React, { useMemo, useState } from 'react';
import { useLocation } from 'react-router';
import { getListBlog } from '../../api';
import { Breadcrumb, Pagination } from '../../Components';
import BlogItem from './BlogItem/BlogItem';
import './style.css';

let PageSize = 5;

function BlogList(props) {
    // const data = [
    //     {
    //         title: 'The key to victory was creating routines.',
    //         image: 'https://casa.7uptheme.net/wp-content/uploads/2019/05//Blog-1-800x440.jpg',
    //         location: 'right'
    //     },
    //     {
    //         title: 'Modern house remodel is all about details',
    //         image: 'https://casa.7uptheme.net/wp-content/uploads/2019/05//Blog-2-800x440.jpg',
    //         location: 'left'
    //     },
    //     {
    //         title: 'Expand Your Mind, Change Everything',
    //         image: 'https://casa.7uptheme.net/wp-content/uploads/2019/05//Blog-3-800x440.jpg',
    //         location: 'right'
    //     }, {
    //         title: 'Interview With Stephen Grudier.',
    //         image: 'https://casa.7uptheme.net/wp-content/uploads/2019/05//Blog-4-800x440.jpg',
    //         location: 'left'

    //     }, {
    //         title: 'A wooden cottage kitchen',
    //         image: 'https://casa.7uptheme.net/wp-content/uploads/2019/05//Blog-5-800x440.jpg',
    //         location: 'right'

    //     }, {
    //         title: 'The details are not the details.',
    //         image: 'https://casa.7uptheme.net/wp-content/uploads/2019/05//Blog-6-800x440.jpg',
    //         location: 'left'

    //     }, {
    //         title: 'Designing a manager office',
    //         image: 'https://casa.7uptheme.net/wp-content/uploads/2019/05//Blog-7-800x440.jpg',
    //         location: 'right'
    //     }, {
    //         title: 'Furniture design basics',
    //         image: 'https://casa.7uptheme.net/wp-content/uploads/2019/05//Blog-8-800x440.jpg',
    //         location: 'left'

    //     }, {
    //         title: '5 ideas to decor your table',
    //         image: 'https://casa.7uptheme.net/wp-content/uploads/2019/05//Blog-9-800x440.jpg',
    //         location: 'right'

    //     },
    // ]
    const { data } = useQuery({
        queryKey: ['blog-list'],
        queryFn: () => getListBlog()
    })
    let dt = [];
    if (data !== undefined) {
        dt = data
    }
    // console.log(dt)
    const loc = useLocation();
    // console.log(loc.pathname);
    const pathname = loc.pathname.substring(1).split("/");

    // // Pagination
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return dt?.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
    console.log(currentTableData);
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
                        totalCount={dt?.length}
                        pageSize={PageSize}
                        onPageChange={(page) => setCurrentPage(page)}
                    />
                </div>
            </div>

        </div>
    );
}

export default BlogList;