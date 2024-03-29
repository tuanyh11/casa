import { useQueries, useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { getBlogById, getRelateBlog, getSidebarBlogData } from "../../api";
import { Breadcrumb } from "../../Components";
import Content from "./Component/Content";
import Sidebar from "./Component/Sidebar/Sidebar";
import "./style.css";

const BlogDetail = () => {

  const id = useParams()?.id;

  const {data: blog, refetch, isLoading} = useQuery({
    queryKey: ["blog-detail", id],
    queryFn: () => getBlogById(id),
    refetchOnWindowFocus: false,
  })

  const blogId = blog?.id

  const [{data: sidebar}, {data: relatedBlog} ] = useQueries({
    queries: [
      {
        queryKey: ["sidebar-blog"],
        queryFn: getSidebarBlogData,
        refetchOnWindowFocus: false,
        enabled: !!blogId
      },
      {
        queryKey: ["related-blog"],
        queryFn: () => getRelateBlog(blogId),
        refetchOnWindowFocus: false,
        enabled: !!blogId
      }
    ]
  })



  return (
    <div>
      <Breadcrumb />

      <div className="my-[100px]">
        <div className="container">
          <div className="row">
            <div className="w-full md:w-8/12 screen-991:w-9/12 px-15">
              <Content blog={blog} refetch={refetch} relatedBlog={relatedBlog}/>
            </div>
            <div className="w-full md:w-4/12 screen-991:w-3/12 px-15 ">
              <div className="mt-[50px] md:mt-0">
                <Sidebar
                  data={{
                    author: blog?.author?.node,
                    tags: sidebar?.[1],
                    cate: sidebar?.[0],
                    relatedBlog
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
