import React from 'react';
import Follow from '../About/Follow/Follow';
import Category from './Category/Category';
import DealOf from './DealOf/DealOf';
import LatestNew from './LatestNew/LatestNew';
import Logo from './Logo/Logo';
import NewArrivals from './NewArrivals/NewArrivals';
import OurTeam from './OurTeam/OurTeam';
import SliderHome from './SliderHome/SliderHome';
import './style.css';
import Trending from './Trending/Trending';
import WorkShop from './WorkShop/WorkShop';

function Home(props) {

    return (
        <>
            <SliderHome />
            <div className='home-container max-w-[1320px] relative w-full px-[15px] m-auto '>
                <Category />
                <Logo />
            </div>
            <WorkShop />
            <div className='home-container max-w-[1320px] relative w-full px-[15px] m-auto '>
                <NewArrivals />
                <DealOf />
                <Trending />
            </div>
            <OurTeam />
            <div className='home-container max-w-[1320px] relative w-full px-[15px] m-auto '>
                <LatestNew />
                <Follow />
            </div>
        </>
    );
}

export default Home;