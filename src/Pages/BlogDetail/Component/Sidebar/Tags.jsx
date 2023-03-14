import React from "react";
import { Link } from "react-router-dom";
import { styleTags } from "../../../../assets/data";

const Tags = () => {
  return (
    <div>
      <div id="tag_cloud-1" class="sidebar-widget widget widget_tag_cloud">
        <h3 class="widget-title">Tags</h3>
        <div class="widget-inner">
          <div class="tagcloud">
            {styleTags.map((tag) => (
              <Link
                key={tag.id}
                className="tag-cloud-link tag-link-17 tag-link-position-1"
              >
                {tag.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tags;
