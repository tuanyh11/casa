import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../../Components';
import './style.css';
function Page404(props) {
    return (
        <>
            <Breadcrumb label={'404'} />
            <div className='content-404'>
                <div className='container-404 max-w-[1320px] m-auto px-[15px] w-auto'>
                    <div className='content-default-404'>
                        <div className='content-row flex flex-wrap w-full'>
                            <div className='col-md-6-left w-1/2 relative px-[15px] '>
                                <div class="icon-404">
                                    <span class="number">404</span>
                                    <span class="text">Page Not Found</span>
                                </div>
                            </div>
                            <div className='col-md-6-right w-1/2 relative px-[15px]'>
                                <div class="info-404">
                                    <h2 class="text-[#f598a4]">Oops!</h2>
                                    <h3>Page not found on server</h3>
                                    <p class="desc">The link you followed is either outdated, inaccurate or the server has been instructed not to let you have it.</p>
                                    <Link to="/" class="shop-button">Go to Home</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page404;