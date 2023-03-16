import React, { useEffect, useState } from 'react';

function DealOf(props) {
    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();
    // console.log(timerSeconds);
    let interval;
    // const time_count_down = ;
    const startTimer = () => {
        const countDownDate = new Date("May 30,2023 ").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();

            const distance = countDownDate - now;

            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor(
                (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
            const seconds = Math.floor((distance % (60 * 1000)) / 1000);

            if (distance < 0) {
                // Stop Timer

                clearInterval(interval.current);
            } else {
                // Update Timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        });
    };

    useEffect(() => {
        startTimer();
    });


    return (
        <div className='deal-of-main mb-[120px] px-[-15px] '>
            <div className='deal-of-banner-advs w-full relative'>
                <a href='#' className='adv-thumb-link'>
                    <img src='https://casa.7uptheme.net/wp-content/uploads/2019/10/a12.jpg' alt='' />
                </a>
                <div className='deal-of-banner'>
                    <h3 class="text-[36px] font-bold text-[#303030] tracking-[1px] uppercase">
                        Deal of<br />
                        the day
                    </h3>
                    <div className='obc-line'>
                        <div className='countdown'>
                            {/* <span className="countdown-section">
                                <span className="countdown-amount">{timerDays}</span>
                                <span className="countdown-period hidden">Days</span>
                            </span> */}
                            <span className="countdown-section">
                                <span className="countdown-amount">{timerHours}</span>
                                <span className="countdown-period hidden">Hours</span>
                            </span>
                            <span className="countdown-section">
                                <span className="countdown-amount">{timerMinutes}</span>
                                <span className="countdown-period hidden">Mins</span>
                            </span>
                            <span className="countdown-section">
                                <span className="countdown-amount">{timerSeconds}</span>
                                <span className="countdown-period hidden">Secs</span>
                            </span>
                        </div>
                        <span class="">From: <strong class="text-[#303030]">$20.00</strong></span>
                    </div>
                    <div class="banner-button">
                        <a class="shop-button" href="#">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}
DealOf.defaultProps = {
    timerDays: 10,
    timerHours: 10,
    timerMinutes: 10,
    timerSeconds: 10,
};
export default DealOf;