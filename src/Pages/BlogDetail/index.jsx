import { useQueries, useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { getBlogById, getSidebarBlogData } from "../../api";
import { Breadcrumb } from "../../Components";
import Content from "./Component/Content";
import Sidebar from "./Component/Sidebar/Sidebar";
import "./style.css";

const BlogDetail = () => {

  const id = useParams()?.id;
  const {data: blog, refetch} = useQuery({
    queryKey: ["blog-detail", id],
    queryFn: () => getBlogById(id),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  })


  const {data: sidebar } = useQuery({
    queryKey: ["sidebar-blog"],
    queryFn: getSidebarBlogData,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  },)


  return (
    <div>
      <Breadcrumb />

      <div className="my-[100px]">
        <div className="container">
          <div className="row">
            <div className="w-full md:w-8/12 screen-991:w-9/12 px-15">
              <Content blog={blog} refetch={refetch}/>
            </div>
            <div className="w-full md:w-4/12 screen-991:w-3/12 px-15 ">
              <div className="mt-[50px] md:mt-0">
                <Sidebar
                  data={{
                    author: blog?.author?.node,
                    tags: sidebar?.[1],
                    cate: sidebar?.[0],
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
