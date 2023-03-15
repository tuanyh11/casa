import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDate } from "../../../../hooks";
import BlogMeta from "./BlogMeta";
import Image from "./Image";
import RelatedPost from "./RelatedBlog";

const Content = ({ blog }) => {
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
          <h2 className="text-[36px] font-bold mb-[19px] break-words uppercase">
            {title}{" "}
          </h2>

          {/* end title */}

          <div
            className="mb-6 text-content"
            dangerouslySetInnerHTML={{ __html: firstContent }}
          />
        </div>

        <div className="pt-[9px] pb-[7px] mb-6">
          <div className="row">
            {images?.map((image, i) => (
              <div key={i} className="w-4/12 px-15">
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
      {<BlogMeta tags={tags}/>}

      {/* relate post */}
      <div className="mb-20">
        <RelatedPost />
      </div>

      {/* end relate post */}

      {/* comment */}

      <div className="">
        <h2 className=" font-bold  text-[24px] inline-block relative title-single-related-post mb-[45px]">
          {commentCount &&
            (Number(commentCount) > 1
              ? `${commentCount} COMMENTS`
              : `${commentCount} COMMENT`)}
        </h2>

        <div className="">
          {comments?.map((comment, index) => (
            <div key={comment?.commentId}>
              <Comment
                {...comment}
                replies={comment?.replies?.nodes}
                getDate={getDate}
                hasReplies={comment?.replies}
                isLastComment={comment.length - 1 === index}
              />
            </div>
          ))}
        </div>
        {/* end comment */}
      </div>

      <div className="mt-[90px]">
        <div className="">
          <CommentForm />
        </div>

        <div className="">
          <p className=" mt-[13px] text-gray-#999 mb-[43px]">
            You must be{" "}
            <Link to="/login" className=" text-black-#222222">
              logged in
            </Link>{" "}
            to post a comment.
          </p>
        </div>
      </div>
    </div>
  );
};



function Comment(props) {
  const authorAvatar = props?.author?.node?.avatar?.url;

  const authorName = props?.author?.node?.name;

  const replies = props?.replies;

  const date = props?.getDate(props?.date);

  const content = props?.content;

  const hasReplies = props.hasReplies;

  const isLastComment = props?.isLastComment && !hasReplies;

  return (
    <ul>
      <li className="comment odd alt thread-odd thread-alt depth-1">
        <div
          className={`item-comment table-custom ${
            isLastComment ? "" : "mb-[30px]"
          }`}
        >
          <div className="comment-thumb vcard">
            <img
              alt=""
              src={authorAvatar}
              srcset="https://secure.gravatar.com/avatar/8bc4b83b69d7fd758c3066e131f65ea7?s=244&amp;d=mm&amp;r=g 2x"
              className=" rounded-full"
              height="122"
              width="122"
              loading="lazy"
              decoding="async"
            />{" "}
          </div>
          <div className="comment-info">
            <div className="author-date mb-[15px]">
              <cite className="fn">{authorName}</cite>{" "}
              <span className="navi cmt-date">{date}</span>
            </div>
            <div
              className="desc-comment-text clearfix"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            <div
              className={`  mt-[15px] ${
                hasReplies ? " comment-time-reply" : ""
              }`}
            >
              {/* <Link
                rel="nofollow"
                className="comment-reply-login"
                to={"/login"}
              >
                Log in to Reply
              </Link>{" "} */}
              <button
                rel="nofollow"
                className="comment-reply-login transition-main hover:text-main"
                to={"/login"}
              >
                 Reply
              </button>{" "}
            </div>
          </div>
        </div>

        <div className="pl-[130px]">
          {replies?.map((reply) => (
            <div key={reply?.commentId} className="mb-[30px] last:mb-0">
              <Comment
                {...reply}
                replies={[]}
                getDate={props?.getDate}
                hasReplies={true}
              />
            </div>
          ))}
        </div>
      </li>
    </ul>
  );
}

function CommentForm({ nameUser, onCancel = () => {}, label = "comment" }) {
  return (
    <div>
      {!nameUser ? (
        <h2 className=" font-bold  text-[24px] inline-block relative title-single-related-post mb-[45px]">
          LEAVE A COMMENT
        </h2>
      ) : (
        <div className="flex items-center font-poppins text-dark-color">
          <h3 className="mb-[5px] text-[24px]    font-semibold">
            Reply to {nameUser}
          </h3>
          <button onClick={() => onCancel()} className="text-[19px] ml-[5px] ">
            Cancel Reply
          </button>
        </div>
      )}
      <form action="" className="">
        <textarea
          cols={45}
          rows={8}
          maxLength={65525}
          placeholder="Comment"
          required={true}
          className="px-[15px] py-[10px] w-full border border-solid outline-none"
        ></textarea>

        <div className="mb-4">
          <button className="button">Comment</button>
        </div>
      </form>
    </div>
  );
}

export default Content;
