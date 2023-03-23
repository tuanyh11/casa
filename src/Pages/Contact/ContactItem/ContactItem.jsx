import React from 'react';

const ContactItem = (props) => {
    // console.log(props);
    return (
        <div className='service-contact-items w-1/3'>
            <div className='item-service mb-[30px]'>
                <a href='#' className='icon-link'>
                    {props.icon}
                </a>
                <div className="info-service">
                    <h3 className='mt-[30px] relative mb-[50px] uppercase leading-[1.1]'>
                        <a href="#">{props.name}</a>
                    </h3>
                    <div className="item-service-description ">
                        {props.content}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactItem;