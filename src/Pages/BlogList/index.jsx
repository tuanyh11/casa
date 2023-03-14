import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { Breadcrumb, Pagination } from '../../Components';
import BlogItem from './BlogItem/BlogItem';
import './style.css';

function BlogList(props) {
    const data = [
        {
            title: 'The key to victory was creating routines.',
            image: 'https://casa.7uptheme.net/wp-content/uploads/2019/05//Blog-1-800x440.jpg',
            location: 'right'
        },
        {
            title: 'Modern house remodel is all about details',
            image: 'https://casa.7uptheme.net/wp-content/uploads/2019/05//Blog-2-800x440.jpg',
            location: 'left'
        },
        {
            title: 'Expand Your Mind, Change Everything',
            image: 'https://casa.7uptheme.net/wp-content/uploads/2019/05//Blog-3-800x440.jpg',
            location: 'right'
        }, {
            title: 'Interview With Stephen Grudier.',
            image: 'https://casa.7uptheme.net/wp-content/uploads/2019/05//Blog-4-800x440.jpg',
            location: 'left'

        }, {
            title: 'A wooden cottage kitchen',
            image: 'https://casa.7uptheme.net/wp-content/uploads/2019/05//Blog-5-800x440.jpg',
            location: 'right'

        }, {
            title: 'The details are not the details.',
            image: 'https://casa.7uptheme.net/wp-content/uploads/2019/05//Blog-6-800x440.jpg',
            location: 'left'

        }, {
            title: 'Designing a manager office',
            image: 'https://casa.7uptheme.net/wp-content/uploads/2019/05//Blog-7-800x440.jpg',
            location: 'right'
        }, {
            title: 'Furniture design basics',
            image: 'https://casa.7uptheme.net/wp-content/uploads/2019/05//Blog-8-800x440.jpg',
            location: 'left'

        }, {
            title: '5 ideas to decor your table',
            image: 'https://casa.7uptheme.net/wp-content/uploads/2019/05//Blog-9-800x440.jpg',
            location: 'right'

        },
    ]
    const loc = useLocation();
    // console.log(loc.pathname);
    const pathname = loc.pathname.substring(1).split("/");
    const [offset, setOffset] = useState({
        start: 0,
        end: 5,
    });
    return (
        <div className='blog-list-main'>
            <Breadcrumb label={pathname}
            // isForSearching={pathname}
            // offPath={pathname}
            />
            <div className='blog-list-wapper my-[100px]'>
                <div className='blog-list-container max-w-[1320px] m-auto relative w-full px-[15px]'>
                    <div className='blog-list-view'>
                        {data.map((item, index) => (
                            <BlogItem data={item} key={index} />
                        ))}

                    </div>
                    {/* <Pagination
                        items={data?.totalLength}
                        itemToShow={5}
                        getOffset={(start, end) =>
                            setOffset({
                                start,
                                end,
                            })
                        }
                    /> */}
                </div>
            </div>

        </div>
    );
}

export default BlogList;