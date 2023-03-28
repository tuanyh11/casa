import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, PinterestIcon, PinterestShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton, } from 'react-share';
import Breadcrumb from '../../Components/Common/Breadcrumb/Breadcrumb';
import { useCartStore } from '../../Components/Store';
import './style.css';


function WishList(props) {
    const { wishItems, addItemWishtoCart, removeItemWish } = useCartStore();
    const [mess, setMess] = useState()
    // console.log(wishItems);
    const handleRemoveItemWish = (id) => {
        setMess('Product successfully removed.')
        removeItemWish(id)
    }
    const handleAddtoWishToCart = (wishitem) => {
        addItemWishtoCart(wishitem)
        removeItemWish(wishitem.id)
        setMess('Product added to cart successfully')
    }
    console.log(mess);
    return (
        <>
            <Breadcrumb label={'wishlist'} />
            <div className='wish-content my-[100px]'>
                <div className='wish-container max-w-[1320px] m-auto px-[15px] w-full'>
                    <div className='wish-row px-[15px]'>
                        <form method='post'>
                            {mess && <div className='mess-wish'>
                                {mess}
                            </div>
                            }

                            <table className='wishlist_table'>
                                <thead>
                                    <tr>
                                        <th className="product-remove">
                                            <span className="nobr">
                                            </span>
                                        </th>
                                        <th className="product-thumbnail"></th>
                                        <th className="product-name">
                                            <span className="nobr">
                                                Product name
                                            </span>
                                        </th>
                                        <th className="product-price">
                                            <span className="nobr">
                                                Unit price
                                            </span>
                                        </th>


                                        <th className="product-stock-status">
                                            <span className="nobr">
                                                Stock status
                                            </span>
                                        </th>

                                        <th className="product-add-to-cart">
                                            <span className="nobr">
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        wishItems.length > 0 ? (

                                            wishItems?.map((item, index) => {
                                                const imageProduct = item?.acf_product?.imageProduct?.[0].imageUrlProduct
                                                const name = item?.name
                                                const price = item?.price || item?.regularPrice
                                                const instock = item?.stockStatus.replace(/_/g, ' ')
                                                return (
                                                    <tr className='wish-item' key={index}>
                                                        <td className="product-remove">
                                                            <div>
                                                                <div href="#" className=" remove_from_wishlist cursor-pointer" title="Remove this product"
                                                                    onClick={() => handleRemoveItemWish(item?.id)}
                                                                >×</div>
                                                            </div>
                                                            <div className='product-remove-mobile'
                                                                onClick={() => handleRemoveItemWish(item?.id)}>
                                                                <i className="fa-solid fa-trash-can"></i>
                                                            </div>
                                                        </td>
                                                        <td className="product-thumbnail">
                                                            <Link to={`/product/${item?.slug}`}>
                                                                <img width="300" height="300" src={imageProduct} alt="" />
                                                            </Link>

                                                        </td>
                                                        <td className="product-name">
                                                            <Link to={`/product/${item?.slug}`}>
                                                                {name}
                                                            </Link>

                                                        </td>
                                                        <td className="product-price-wish">
                                                            <div className="product-price ">
                                                                <span >{price}</span>
                                                            </div>
                                                        </td>

                                                        <td className="product-stock-status">
                                                            <span className="wishlist-in-stock">{instock}</span>
                                                        </td>

                                                        <td className="product-add-to-cart">

                                                            <div className='add-cart-wish'
                                                                onClick={() => handleAddtoWishToCart(item)}>
                                                                Add to cart
                                                            </div>
                                                        </td>

                                                    </tr>
                                                )
                                            })

                                        ) : (
                                            <tr>
                                                <td colSpan="6" className="wishlist-empty">No products added to the wishlist</td>
                                            </tr>

                                        )
                                    }

                                </tbody>
                            </table>
                            <div className='wish-share'>
                                <h4>Share on:</h4>
                                <div className='list-wish-share'>
                                    <FacebookShareButton
                                        url={"http://127.0.0.1:5173/wishlist"}
                                        quote={"wishlist"}
                                        className="share-button"
                                    >
                                        <FacebookIcon size={26} />
                                    </FacebookShareButton>
                                    <TwitterShareButton
                                        url={"http://127.0.0.1:5173/wishlist"}
                                        className="share-button"
                                    >
                                        <TwitterIcon size={26} />
                                    </TwitterShareButton>
                                    <PinterestShareButton
                                        media={`http://127.0.0.1:5173/wishlist`}
                                        className="share-button"
                                    >
                                        <PinterestIcon size={26} />
                                    </PinterestShareButton>
                                    <EmailShareButton
                                        url={"http://127.0.0.1:5173/wishlist"}
                                        className="share-button"
                                    >
                                        <EmailIcon size={26} />
                                    </EmailShareButton>
                                    <WhatsappShareButton
                                        url={"http://127.0.0.1:5173/wishlist"}
                                        className="share-button"
                                    >

                                        <WhatsappIcon size={26} />
                                    </WhatsappShareButton>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WishList;