import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { getProducts, getSidebarProduct } from '../../../../api';
import { Breadcrumb } from '../../../../Components';
import Sidebar from '../../../Shop/Components/Sidebar';
import { filterProductBySidebar } from '../../../Shop/utils';
import RegisterForm from './RegisterForm/RegisterForm';



function Register(props) {
    const { data: sidebarData } = useQuery({
        queryKey: ["sidebar-shop"],
        queryFn: getSidebarProduct,
        refetchOnWindowFocus: false,
    });

    const [showProducts, setShowProducts] = useState([]);
    const [trendingProducts, setTrendingProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [disPlayMode, setDisPlayMode] = useState("grid");
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(12);

    const { data: products } = useQuery({
        queryKey: ["get-all-products", currentPage, pageSize],
        queryFn: () =>
            getProducts({
                start: currentPage * pageSize,
                end: currentPage * pageSize + pageSize,
            }),
        onSuccess: (data) => {
            setShowProducts(data);
            setTrendingProducts(data?.slice(0, 3));
        },
        refetchOnWindowFocus: false,
    });

    const loc = useLocation();

    const params = new URLSearchParams(loc.search);

    const query = Object.fromEntries(Array.from(params.entries()));

    //
    useEffect(filterProductBySidebar(products, query, setShowProducts), [
        loc,
        products,
    ]);

    const cateProduct = sidebarData?.[0];
    const tagProduct = sidebarData?.[1];
    const pathname = loc.pathname.substring(1).split("/");
    return (
        <>
            <Breadcrumb label={pathname} />
            <div className='content-login my-[100px]'>
                <div className='login-container max-w-[1320px] m-auto px-[15px] w-full'>
                    <div className='login-row flex flex-wrap w-full'>
                        <div className='slidebar w-1/4 px-[15px]'>
                            <Sidebar
                                cateProduct={cateProduct}
                                tagProduct={tagProduct}
                                trendingProducts={trendingProducts}
                                search={search}
                                onSearch={(e) => setSearch(e.target.value)}
                                offFilter={true}
                                offColor={true}
                            />
                        </div>
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </>

    );
}

export default Register;