import React from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import { useDate } from "../../../../hooks";
import Image from "./Image";

const socialMediaIcons = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/",
    icon: "fa-brands fa-facebook-f",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/",
    icon: "fab fa-twitter",
  },
  {
    name: "Google+",
    link: "https://plus.google.com/",
    icon: "fa-brands fa-google-plus-g",
  },
  {
    name: "Pinterest",
    link: "https://www.pinterest.com/",
    icon: "fab fa-pinterest",
  },
  {
    name: "Email",
    link: "mailto:example@example.com",
    icon: "fas fa-envelope",
  },
];

// const categories = ["BOWLS", "EXPLORE DINNERWARE", "PLATES"];

const tags = ["CASUAL", "ELEGANT", "STYLE"];

const Content = ({ blog }) => {
  const getDate = useDate();
  // blog?.featuredImage?.node?.mediaItemUrl
  const featureImage = blog?.post?.imagePost;

  const categories = blog?.categories?.nodes;

  const publishedDate = getDate(blog?.date);

  const title = blog?.title;
  const firstContent = blog?.post?.content?.[0]?.contentField;
  const secondContent = blog?.post?.content?.[1]?.contentField;

  const images = blog?.post?.image;
  const comments = blog?.comments?.nodes;

  const commentCount = blog?.commentCount;

  console.log(comments);



  return (
    <div>
      <div className="mb-[60px]">
        <Image url={featureImage} />

        {/* content  */}
        <div className="">
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
      <div className="single_post_meta">
        <div className="row">
          <div className="md:w-6/12 px-15 sm-social">
            {tags.map((tag, index) => (
              <Link
                key={tag}
                to={`/blog?tag=${tag}`}
                className="mr-[6px] font-poppins"
              >
                {tag} {tags.length - 1 === index ? "" : ","}
              </Link>
            ))}
          </div>

          <div className="md:w-6/12 px-15 sm-social">
            <div className="flex justify-end -mx-[14px] ">
              {socialMediaIcons.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  title={item.name}
                  className={`  leading-6  first:pl-0 `}
                >
                  <span className="share-icon">
                    <i className={item.icon}></i>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* relate product */}
      <div className="mb-20">
        <h2 className=" font-bold  text-[24px] inline-block relative title-single-related-post mb-[45px]">
          RELATED POTS
        </h2>
        <div className="-mx-[15px]">
          <Slider slidesToShow={3}>
            {new Array(3).fill(0).map((_, i) => (
              <div key={i}>
                <div className="mx-[15px] item-post item-post-style2">
                  <div className="post-thumb banner-advs zoom-image overlay-image relative">
                    <a
                      href="https://casa.7uptheme.net/2019/05/15/the-key-to-victory-was-creating-routines/"
                      className="adv-thumb-link after:inset-0 after:absolute"
                    >
                      <img
                        width="280"
                        height="155"
                        src="https://casa.7uptheme.net/wp-content/uploads/2019/05//Blog-1-280x155.jpg"
                        className="attachment-280x155 size-280x155 wp-post-image"
                        alt=""
                        decoding="async"
                        loading="lazy"
                      />{" "}
                    </a>
                  </div>
                  <div className="post-info mt-3">
                    <h3 className="title16 text-[16px] uppercase post-title font-medium text-uppercase">
                      <Link to={`/blog/${123}`}>
                        The key to victory was creating routines.
                      </Link>
                    </h3>
                    <div className="meta-post text-capitalize">
                      <ul className="list-inline-block capitalize">
                        <li className="meta-author">
                          <span>By</span>{" "}
                          <Link
                            className=" text-main"
                            to={`/blog?author=${"tuanleo"}`}
                          >
                            admin
                          </Link>
                        </li>
                        <li className="meta-date after:!hidden">
                          May 15, 2019
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* end relate product */}

      {/* comment */}

      <div className="">
        <h2 className=" font-bold  text-[24px] inline-block relative title-single-related-post mb-[45px]">
          {commentCount &&
            (Number(commentCount) > 1
              ? `${commentCount} COMMENTS`
              : `${commentCount} COMMENT`)}
        </h2>

        {/* end comment */}
      </div>

      <div className="mt-[90px]">
        <h2 className=" font-bold  text-[24px] inline-block relative title-single-related-post mb-[45px]">
          LEAVE A COMMENT
        </h2>

        <div className="">
          
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
  <ul>
    <li className="comment odd alt thread-odd thread-alt depth-1">
      <div className={`item-comment table-custom`}>
        <div className="comment-thumb vcard">
          <img
            alt=""
            src="https://secure.gravatar.com/avatar/8bc4b83b69d7fd758c3066e131f65ea7?s=122&amp;d=mm&amp;r=g"
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
            <cite className="fn">Louis Estevez</cite>{" "}
            <span className="navi cmt-date">May 24, 2019</span>
          </div>
          <div className="desc-comment-text clearfix">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
          </div>
          <div className="comment-time-reply  mt-[15px]">
            <Link rel="nofollow" className="comment-reply-login" to={"/login"}>
              Log in to Reply
            </Link>{" "}
          </div>
        </div>
      </div>
    </li>
  </ul>;
}

function CommentForm({ nameUser, onCancel = () => {} }) {
  return (
    <div>
      {!nameUser ? (
        <h3 className="mb-[5px] text-[24px]  font-poppins text-dark-color font-semibold">
          Leave a Reply
        </h3>
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

        <div className="mb-4">{/* <Button label={"POST COMMENT"} /> */}</div>
      </form>
    </div>
  );
}

export default Content;
