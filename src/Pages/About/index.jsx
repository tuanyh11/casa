import React from 'react'
import CountupNumberWrap from './CountupNumberWrap/CountupNumberWrap';
import Follow from './Follow/Follow';
import SliderTestimo from './Slider';
import SliderTop from './SliderTop/SliderTop'
import './style.css';
import VisonValue from './VisonValue/VisonValue';
const About = () => {
  return (
    <>
      <SliderTop />
      <div className='about-main'>
        <div className='about-container max-w-[1320px] m-auto relative w-full px-[15px]'>
          <div className='row-list'>
            <div className='content-wrap '>
              <div className='type-page'>
                <div className='entry-content text-[#303030] m-auto leading-[24px]'>
                  <VisonValue />
                  <SliderTestimo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CountupNumberWrap />
      <Follow />
    </>
  )
}

export default About