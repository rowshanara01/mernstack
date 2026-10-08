import React from "react";

const ContactMe = () => {
  return (
    <div className="bg-accent pt-12 pb-6">
      <div className=" max-w-screen-2xl mx-auto ">
      <div
      data-aos="flip-down"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="sm:w-2/4 w-full mx-auto p-6 md:p-0 mt-12"
    >
      <h2 className="text-3xl font-bold text-center mt-12">
        Let us handle your <br /> project, <span className="text-primary">professionally</span>.
      </h2>

      <div className="flex flex-col md:flex-row gap-4 lg:gap-16 mt-12">
        <div className="">
          <input
            type="text"
            placeholder="Full Name"
            className="input w-full mb-6"
          />
          <input
            type="text"
            placeholder="Email Address"
            className="input w-full"
          />
        </div>
        <div className="div">
          <input
            type="text"
            placeholder="Last Name"
            className="input w-full mb-6"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="input w-full"
          />
        </div>
      </div>
      <textarea
        className="textarea w-full mt-6"
        placeholder="Your Message"
      ></textarea>
      <button className="btn btn-primary w-25 flex justify-center mx-auto m-4">
        Send Message
      </button>
    </div>
      </div>
    </div>
  );
};

export default ContactMe;
