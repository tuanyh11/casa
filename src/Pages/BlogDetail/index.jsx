import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { getBlogById } from "../../api";
import { Breadcrumb } from "../../Components";
import Content from "./Component/Content";
import Sidebar from "./Component/Sidebar/Sidebar";
import "./style.css";


const BlogDetail = () => {

  const id = useParams()?.id


  const {data}  = useQuery({
    queryKey: ["blog-detail", id],
    refetchOnWindowFocus: false,
    queryFn: () => getBlogById(id) 
  })


  return (
    <div>
      <Breadcrumb />

      <div className="my-[100px]">
        <div className="container-custom">
          <div className="row">
            <div className="w-9/12 px-15">
                <Content blog={data}/>
            </div>
            <div className="w-3/12 px-15">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
