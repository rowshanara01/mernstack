import React from "react";
import Divider from "../../Hooks/Divider/Divider";
import { BsFileEarmarkTextFill } from "react-icons/bs";
import { RiAdminFill } from "react-icons/ri";
import { ImTrello } from "react-icons/im";
import { RiFileCopyFill } from "react-icons/ri";

const Blogs = () => {
  return (
    <div className="bg-secondary pt-12">
      <div className="max-w-screen-2xl text-white mx-auto px-6 lg:px-12">
        <h2 className="text-4xl text-center">Latest Blog</h2>
        <Divider w={"w-36"} />
        <p className="font-design text-center text-3xl">
          We love to share our Story & Experience
        </p>

        <div className="flex flex-col md:flex-row justify-between gap-6 mt-12">
          <div className="">
            <div className="flex gap-4">
              <div className="p-2 h-full text-gray-500 rounded bg-white">
                <span className="text-4xl ">
                  <BsFileEarmarkTextFill className="mb-2" />
                </span>
                <hr />
                <p className="text-center mt-2">
                  August 5
                  <br />
                  2022{" "}
                </p>
              </div>
              <div className="div">
                <img
                 data-aos="fade-up"
                 data-aos-anchor-placement="bottom-bottom"
                 data-aos-easing="linear"
              data-aos-duration="1500"
                  className="img-fluid"
                  src="https://spalabdev.wpengine.com/wp-content/uploads/2014/07/blog18.jpg"
                  alt=""
                />

                <p className="text-lg mt-8 mb-3">Invest in a Healthy Tomorrow</p>
                <hr />
                <div className="sm:flex-row flex flex-col gap-4 mt-4 mb-12">
                  <p className="flex justify-center items-center gap-2"> <RiAdminFill/>admin</p>
                  <p className="flex justify-center items-center gap-2"><ImTrello/> Relax</p>
                  <p className="flex justify-center items-center gap-2"><RiFileCopyFill/> Wellness-Center</p>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex gap-4">
              <div className="p-2 h-full text-gray-500 rounded bg-white">
                <span className="text-4xl">
                  <BsFileEarmarkTextFill className="mb-2" />
                </span>
                <hr />
                <p className="text-center mt-2">
                  August 10<br />
                  2022{" "}
                </p>
              </div>

              <div className="div">
                <img
                 data-aos="fade-down"
                 data-aos-anchor-placement="bottom-bottom"
                 data-aos-easing="linear"
              data-aos-duration="1500"
                  className="img-fluid"
                  src="https://spalabdev.wpengine.com/wp-content/uploads/2014/07/blog.jpg"
                  alt=""
                />
                 <p className="text-lg mt-8 mb-3">The Latest Spa Craze</p>
                <hr />
                <div className="sm:flex-row flex flex-col gap-4 mt-4 mb-12">
                  <p className="flex justify-center items-center gap-2"> <RiAdminFill/>admin</p>
                  <p className="flex justify-center items-center gap-2"><ImTrello/>Body-Care</p>
                  <p className="flex justify-center items-center gap-2"><RiFileCopyFill/> Cuisine </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
