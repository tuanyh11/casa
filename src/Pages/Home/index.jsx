import React from 'react';
import Category from './Category/Category';
import NewArrivals from './NewArrivals/NewArrivals';
import SliderHome from './SliderHome/SliderHome';
import './style.css';
import WorkShop from './WorkShop/WorkShop';

function Home(props) {
    const dataCategory = [
        {
            name: 'LIGHT<br />LANTERN',
            image: 'https://casa.7uptheme.net/wp-content/uploads/2019/06//obc-deco-410x260.jpg',
            category: 'DECOR',
        },
        {
            name: 'Stack<br>Mugs',
            image: 'https://casa.7uptheme.net/wp-content/uploads/2019/06//obc-gift-set-410x260.jpg',
            category: 'Gift Set',
        }, {
            name: 'JEVA<br>PLANTER',
            image: 'https://casa.7uptheme.net/wp-content/uploads/2019/06//obc-table-deco-410x260.jpg',
            category: 'Table Decor',
        },
    ]
    const dataLogo = [
        { image: 'https://casa.7uptheme.net/wp-content/uploads/2019/10/a1.jpg' },
        { image: 'https://casa.7uptheme.net/wp-content/uploads/2019/10/a2.jpg' },
        { image: 'https://casa.7uptheme.net/wp-content/uploads/2019/10/a3.jpg' },
        { image: 'https://casa.7uptheme.net/wp-content/uploads/2019/10/a4.jpg' },
        { image: 'https://casa.7uptheme.net/wp-content/uploads/2019/10/a5.jpg' },
        { image: 'https://casa.7uptheme.net/wp-content/uploads/2019/10/a6.jpg' },
        { image: 'https://casa.7uptheme.net/wp-content/uploads/2019/10/a7.jpg' },
        { image: 'https://casa.7uptheme.net/wp-content/uploads/2019/10/a8.jpg' },
        { image: 'https://casa.7uptheme.net/wp-content/uploads/2019/10/a9.jpg' },
        { image: 'https://casa.7uptheme.net/wp-content/uploads/2019/10/a10.jpg' },
    ]


    return (
        <>
            <SliderHome />
            <div className='home-container max-w-[1320px] relative w-full px-[15px] m-auto '>
                <div className='category-home px-[15px] mb-[120px]'>
                    {
                        dataCategory.map((item, index) => (
                            <Category key={index} data={item} />
                        ))
                    }
                </div>
                <div className='logo-main w-full flex flex-wrap mb-[120px]'>
                    {dataLogo.map((item, index) => (
                        <div className='logo-item' key={index}>
                            <a href='#'>
                                <img src={item.image} alt='' />
                            </a>
                        </div>
                    ))}

                </div>
            </div>
            <WorkShop />
            <div className='home-container max-w-[1320px] relative w-full px-[15px] m-auto '>
                <NewArrivals />
            </div>
        </>
    );
}

export default Home;