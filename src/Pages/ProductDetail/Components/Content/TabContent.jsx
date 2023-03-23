import React, { useState } from 'react'

const TabContent = () => {
    const [tab, setTab] = useState(false);

    return (
        <div>
            <div className="detail-tab-title font-poppins">
                <ul
                    className="list-tag-detail list-none font-medium"
                    role="tablist"
                >
                    <li className={`description_tab  ${!tab ? "active" : ""}`}>
                        <button onClick={() => setTab(false)}>Description </button>
                    </li>
                    <li className={`reviews_tab ${tab ? "active" : ""}`}>
                        <button onClick={() => setTab(true)}>Reviews (0) </button>
                    </li>
                </ul>
            </div>
            <div className="detail-tab-content">
                <div className="tab-content">
                    {!tab ? (
                        <div id="tab-description" className="tab-pane active">
                            <div className="detail-tab-desc">
                                <div className="single-product-detail">
                                    <div className="row mx-[-60px] ">
                                        <div className="w-full mb-[40px] screen-991:mb-0 screen-991:w-4/12 px-[60px] obc-product obc-product-left relative">
                                            <h3 className="title16 poppins-font font-medium">
                                                Care Intructions
                                            </h3>
                                            <p className="desc">
                                                Microwave and dishwasher safe. We recommend
                                                using gentle, environmentally-friendly
                                                detergents. Not suitable for use on an open
                                                flame or electric stove top. Avoid temperature
                                                shock by heating things slowly, evenly, and
                                                carefully
                                            </p>
                                        </div>
                                        <div className="w-full mb-[40px] screen-991:mb-0 screen-991:w-4/12 px-[60px] obc-product obc-product-center relative">
                                            <h3 className="title16 poppins-font font-medium">
                                                PRODUCT SPECS
                                            </h3>
                                            <ul className="list-none">
                                                <li className="mb-[6px]">
                                                    <i className=" font-medium mr-[10px] fa-thin fa-chevron-right"></i>{" "}
                                                    Material: Ceramic
                                                </li>
                                                <li className="mb-[6px]">
                                                    <i className=" font-medium mr-[10px] fa-thin fa-chevron-right"></i>{" "}
                                                    Size: 4″ dia.
                                                </li>
                                                <li className="mb-[6px]">
                                                    <i className=" font-medium mr-[10px] fa-thin fa-chevron-right"></i>{" "}
                                                    Capacity: 16 oz
                                                </li>
                                                <li className="mb-[6px]">
                                                    <i className=" font-medium mr-[10px] fa-thin fa-chevron-right"></i>{" "}
                                                    Designed and handcrafted in Sausalito, CA.
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="w-full mb-[40px] screen-991:mb-0 screen-991:w-4/12 px-[60px] obc-product obc-product-right relative">
                                            <h3 className="title16 poppins-font font-medium">
                                                DID YOU KNOW?
                                            </h3>
                                            <p className="desc">
                                                Microwave and dishwasher safe. We recommend
                                                using gentle, environmentally-friendly
                                                detergents. Not suitable for use on an open
                                                flame or electric stove top. Avoid temperature
                                                shock by heating things slowly, evenly, and
                                                carefully
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div id="tab-reviews" className="tab-pane">
                            <div className="detail-tab-desc">
                                <div id="reviews" className="woocommerce-Reviews">
                                    <div className="mb-[42px]">
                                        <p className="woocommerce-noreviews">
                                            There are no reviews yet.
                                        </p>
                                    </div>

                                    <div id="review_form_wrapper">
                                        <div id="review_form">
                                            <div id="respond" className="comment-respond">
                                                <span
                                                    id="reply-title"
                                                    className="comment-reply-title inline-block"
                                                >
                                                    Be the first to review “Berlage Guest Chair”{" "}
                                                    <small>
                                                        <a
                                                            rel="nofollow"
                                                            id="cancel-comment-reply-link"
                                                            href="/product/berlage-guest-chair/#respond"
                                                        >
                                                            Cancel reply
                                                        </a>
                                                    </small>
                                                </span>
                                                <p className="must-log-in">
                                                    You must be{" "}
                                                    <a href="https://casa.7uptheme.net/my-account/">
                                                        logged in
                                                    </a>{" "}
                                                    to post a review.
                                                </p>{" "}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="clear"></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TabContent