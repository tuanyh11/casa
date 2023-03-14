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

const Content = ({blog}) => {

  const getDate = useDate()

  const featureImage = blog?.featuredImage?.node?.mediaItemUrl;

  const categories = blog?.categories?.nodes;

  const publishedDate = getDate(blog?.date);

  const title = blog?.title;
  const fisrtContent = blog?.post?.content?.[0]?.contentField;
  const secondContent = blog?.post?.content?.[1]?.contentField;

  const image = blog?.post?.image
console.log(blog, image)

  return (
    <div>
      <div className="mb-[60px]">
        <Image
          url={
            featureImage
          }
        />

        {/* content  */}
        <div className="">
          <div className="post-meta-data">
            <div className=" meta-cats silver  after:content-['/'] after:mx-2 after:text-gray-#999 after:inline-block font-poppins ">
              {categories?.map((category, index) => (
                <Link key={category?.id} to={`/blog?name=${category?.slug}`} className="mr-1">
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

          <div className="mb-6 text-content" dangerouslySetInnerHTML={{__html: fisrtContent}}/>

          {/* <div className="mb-6">
            <blockquote>
              <p>
                “Pri an reque postea scriptorem, audiam conclusionemque per eu.
                An enim oblique has, graecis deserunt has no.
                <br />
                Soleat laoreet posidonium. “
              </p>
            </blockquote>
          </div>

          <div className="mb-6">
            <p>
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec
              tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae
              erat consequat auctor eu in elit. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos. Mauris
              in erat justo. Nullam ac urna eu felis dapibus condimentum sit
              amet.
            </p>
          </div> */}

          <div className="mb-6" dangerouslySetInnerHTML={{__html: secondContent}}>
            
          </div>
        </div>

        <div className="pt-[9px] pb-[7px] mb-6">
          <div className="row">
            {new Array(3).fill(0).map((_, i) => (
              <div key={i} className="w-4/12 px-15">
                <div className="line-scale zoom-image">
                  <Link to={"/contact"} className="adv-thumb-link ">
                    <img
                      src={
                        "https://casa.7uptheme.net/wp-content/uploads/2017/11//Obachan-Single-01-280x420.jpg"
                      }
                      alt=""
                      className="w-full"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
            amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
            tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat
            auctor eu in elit. Class aptent taciti sociosqu ad litora torquent
            per conubia nostra, per inceptos himenaeos. Mauris in erat justo.
            Nullam ac urna eu felis dapibus condimentum sit amet.
          </p>
        </div>

        <div className="mb-6">
          <p>
            Duo inermis repudiandae an, harum mandamus qui in. No quo mazim
            doming facilisi, duo ea impetus suavitate interpretaris. No dictas
            scripta placerat per, ut graeco perfecto reprehendunt mea. Pri an
            reque postea scriptorem, audiam conclusionemque per eu. An enim
            oblique has, graecis deserunt has no. Soleat laoreet posidonium an
            vel, delenit pertinax appellantur an est.
          </p>
        </div>

        {/* end content  */}

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
                          <li className="meta-date after:!hidden">May 15, 2019</li>
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

        <div className="">
          <h2 className=" font-bold  text-[24px] inline-block relative title-single-related-post mb-[45px]">
            LEAVE A COMMENT
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Content;
