import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../../Components';
import './style.css';
function Page404(props) {
    return (
        <>
            <Breadcrumb label={'404'} />
            <div className='content-404'>
                <div className='404-container max-w-[1320px] m-auto px-[15px] w-auto'>
                    <div className='content-default-404'>
                        <div className=''>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page404;