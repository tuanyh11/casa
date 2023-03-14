import React from 'react';
import { animated, useSpring } from 'react-spring';

function Number({ n }) {
    const { number } = useSpring({
        from: { number: 0 },
        number: n,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}
function CountupNumberWrap(props) {
    return (
        <div className='countup-main'>
            <div className='countup-wapper max-w-[1320px] m-auto relative w-full'>
                <div className='countup-inner'>
                    <div className='countup-wrap'>
                        <div className='image-countup'>
                            <div className='countup-figure'>
                                <a href='#'>
                                    <img src='https://casa.7uptheme.net/wp-content/uploads/2019/05/about-us02-240x300.png' alt='' />
                                </a>
                            </div>
                        </div>
                        <div className='content-editor'>
                            <div className='content-countup py-[120px]'>
                                <div className='counter-number'>
                                    <div className='counter-inner'>
                                        <div className='icon'>
                                            <i className="fa-sharp fa-regular fa-house"></i>
                                        </div>
                                        <div className='run-value'>
                                            <Number n={103} />
                                        </div>
                                        <p>Stores</p>
                                    </div>

                                    <div className='counter-inner'>
                                        <div className='icon'>
                                            <i className="fa-solid fa-earth-americas"></i>
                                        </div>
                                        <div className='run-value'>
                                            <Number n={50} />
                                        </div>
                                        <p>Countries</p>
                                    </div>


                                    <div className='counter-inner'>
                                        <div className='icon'>
                                            <i className="fa-sharp fa-regular fa-star"></i>
                                        </div>
                                        <div className='run-value'>
                                            <Number n={223} />
                                        </div>
                                        <p>Awards</p>
                                    </div>


                                    <div className='counter-inner'>
                                        <div className='icon'>
                                            <i className="fa-light fa-user-group"></i>
                                        </div>
                                        <div className='run-value'>
                                            <Number n={868} />
                                        </div>
                                        <p>Employees</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CountupNumberWrap;