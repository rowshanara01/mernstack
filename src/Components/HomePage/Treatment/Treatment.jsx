import React from "react";
import treatment from "../../../image/Image/treatment.png";

const Treatment = () => {
  return (
    <div className="bg-accent">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center min-h-screen gap-24  max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div data-aos="fade-up" data-aos-duration="3000" className="div">
          <img className="img-fluid" src={treatment} alt="" />
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="div"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-left">
            Let us handle your <br /> screen{" "}
            <span className="text-primary">Professionally</span>.
          </h2>
          <p className="text-sm text-gray-300 my-6">
            With well written codes, we build amazing apps for all platforms,
            mobile and web apps in general ipsum.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Purus commodo ipsum.
          </p>
          <div className="flex flex-row justify-start gap-x-16 mt-12">
            <div className="stats bg-accent">
              <div className="stat">
                <div className="stat-value text-primary">500+</div>
                <div className="stat-desc">Happy Customer</div>
              </div>
            </div>
            <div className="stats bg-accent">
              <div className="stat">
                <div className="stat-value text-primary">16+</div>
                <div className="stat-desc">Total Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
