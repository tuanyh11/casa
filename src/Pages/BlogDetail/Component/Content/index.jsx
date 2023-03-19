import React from "react";
import { Link, useParams } from "react-router-dom";
import { CommentForm } from "../../../../Components";
import { useDate } from "../../../../hooks";
import BlogMeta from "./BlogMeta";
import CommentSection from "./CommentSection";
import Image from "./Image";
import RelatedPost from "./RelatedBlog";

const Content = ({ blog, refetch, relatedBlog }) => {
  

  const getDate = useDate();

  const featureImage = blog?.post?.imagePost;

  const categories = blog?.categories?.nodes;

  const publishedDate = getDate(blog?.date);

  const title = blog?.title;
  const firstContent = blog?.post?.content?.[0]?.contentField;
  const secondContent = blog?.post?.content?.[1]?.contentField;

  const images = blog?.post?.image;
  const comments = blog?.comments?.nodes;

  const commentCount = blog?.commentCount;

  const tags = blog?.tags?.nodes;

  const author = blog?.author;

  return (
    <div>
      <div className="mb-[60px]">
        <Image url={featureImage} />

        {/* content  */}
        <div>
          <div className="post-meta-data">
            <div className=" meta-cats silver  after:content-['/'] after:mx-2 after:text-gray-#999 after:inline-block font-poppins ">
              {categories?.map((category, index) => (
                <Link
                  key={category?.id}
                  to={`/blog?cate=${category?.slug}`}
                  className="mr-1"
                >
                  {category?.name}
                  {categories.length - 1 === index ? "" : ","}
                </Link>
              ))}
            </div>
            <span className=" meta-cats uppercase">{publishedDate}</span>
          </div>
          <h2 className=" blog-title font-bold mb-[19px] break-words uppercase">
            {title}{" "}
          </h2>

          {/* end title */}

          <div
            className="mb-6 text-content"
            dangerouslySetInnerHTML={{ __html: firstContent }}
          />
        </div>

        <div className="pt-[9px] pb-[7px]">
          <div className="row">
            {images?.map((image, i) => (
              <div key={i} className="w-full md:mb-0 mb-[30px] screens-425:w-4/12 px-15">
                <div className="line-scale zoom-image">
                  <Link to={"/contact"} className="adv-thumb-link ">
                    <img src={image?.urlImage} alt="" className="w-full" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mb-6"
          dangerouslySetInnerHTML={{ __html: secondContent }}
        ></div>

        {/* end content  */}
      </div>
      {<BlogMeta tags={tags} />}

      {/* relate post */}
      <div className="mb-20">
        <RelatedPost data={relatedBlog} />
      </div>

      {/* end relate post */}

      {/* comment */}

      <CommentSection
        commentCount={commentCount}
        comments={comments}
        getDate={getDate}
        author={author}
        blogId={blog?.id}
        refetch={refetch}
      />
    </div>
  );
};

export default Content;
