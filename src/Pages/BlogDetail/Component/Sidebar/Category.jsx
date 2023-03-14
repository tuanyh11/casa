import React from "react";
import { Link } from "react-router-dom";

const Category = ({data: categories}) => {
  return (
    <div>
      <div id="categories-1" class="sidebar-widget widget widget_categories mb-[60px]">
        <h3 class="widget-title">Categories</h3>
        <div class="widget-inner">
          <ul>
            {categories?.map((category) => (
              <li key={category.id} class="cat-item cat-item-16">
                <Link to={`/blog?cate=${category.slug}`} className="hover:text-main">
                    {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Category;
