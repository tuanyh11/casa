import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactItem from './ContactItem/ContactItem';
import './style.css';

function Contact(props) {

    return (
        <div className='contact-main'>
            <div className='contact-map mb-[100px] w-full'>
                <iframe
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Ho%C3%A0ng%20Gia%20Thai%20Nguyen+(Ng%C3%A3%20ba%20%C4%91i%E1%BB%83m%20h%E1%BA%B9n)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    className='h-[640px] w-full'
                >
                </iframe>
            </div>
            <div className='max-w-[1320px] m-auto relative px-[15px]'>
                <div className='our-stores-inner mb-[47px]'>
                    <h2 className='contact-title relative text-[36px] text-[#303030] leading-[72px] text-center uppercase m-0'>
                        OUR STORES
                    </h2>
                    <div className='service-contact-page flex flex-wrap w-full'>
                        <ContactItem
                            icon={<i className="la la-map-marker"></i>}
                            name='Address'
                            content={
                                <p className='leading-[27px]'>
                                    No. 23, St. Louis Street, Melbo, USA
                                    <br />
                                    and 78, Thanh Xuan, Hanoi
                                </p>
                            }
                        />
                        <ContactItem
                            icon={<i className="la la-phone"></i>}
                            name='CONTACT US'
                            content={
                                <p className='leading-[27px]'>
                                    Telephone: (84) 989 177 556
                                    <br />
                                    FAX: (84) 1678 311 160
                                </p>
                            }
                        />
                        <ContactItem
                            icon={<i className="la la-envelope"></i>}
                            name='Email'
                            content={
                                <p className='leading-[27px]'>
                                    contact.7uptheme @gmail.com
                                    <br />
                                    thanphamngoc@gmail.com
                                </p>
                            }
                        />

                    </div>
                </div>
                <div className='contact-form mb-[120px]'>
                    <h2 className='contact-title relative text-[36px] text-[#303030] leading-[72px] text-center uppercase m-0'>
                        GET IN TOUCH
                    </h2>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

export default Contact;