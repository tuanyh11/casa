import React from 'react';

const Category = (props) => {

    return (
        <div className='category-item'>
            <a href='#'>
                <img src={props.data.image} />
            </a>
            <div className="category-banner-info ">
                <h4 className="text-[24px] font-bold uppercase "
                    dangerouslySetInnerHTML={{ __html: props.data.name }}>

                </h4>
                <h5 className="text-[14px] uppercase obc-line">{props.data.category}</h5>
            </div>
        </div>
    );
};

export default Category;