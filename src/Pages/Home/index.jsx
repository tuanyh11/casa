import React from 'react';
import Category from './Category/Category';
import SliderHome from './SliderHome/SliderHome';
import './style.css';

function Home(props) {
    return (
        <>
            <SliderHome />
            <div className='home-container max-w-[1320px] relative w-full px-[15px] m-auto '>
                <div className='category-home px-[15px] mb-[120px]'>
                    {
                        [...new Array(3)].map((item, index) => (
                            <Category key={index} />
                        ))
                    }
                </div>
                <div className='logo-main w-full flex flex-wrap'>
                    <p className='w-1/5'>aaa</p>
                    <p className='w-1/5'>aaa</p>
                    <p className='w-1/5'>aaa</p>
                    <p className='w-1/5'>aaa</p>
                    <p className='w-1/5'>aaa</p>
                    <p className='w-1/5'>aaa</p>
                    <p className='w-1/5'>aaa</p>
                    <p className='w-1/5'>aaa</p>
                    <p className='w-1/5'>aaa</p>
                    <p className='w-1/5'>aaa</p>
                </div>
            </div>
        </>
    );
}

export default Home;