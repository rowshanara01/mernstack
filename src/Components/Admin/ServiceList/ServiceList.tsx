import React from "react";

const ServiceList = () => {
  return (
    <div>
      <form className="w-full">
        <div className="bg-white p-6 flex flex-col lg:flex-row gap-16">
          <div className="flex flex-col gap-6 w-full md:w-2/4">
            <div className="w-full">
              <h2 className="text-sm mb-2 font-bold">Service Title</h2>
              <input
                type="text"
                placeholder="Enter title"
                className="input input-bordered w-full"
              />
            </div>
            <div className="w-full">
            <h2 className="text-sm mb-2 font-bold">Description</h2>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Enter Designation"
            ></textarea>
            </div>
          </div>
          <div className="">
          <h2>Image</h2>
          <input className=" bg-red-300 border-2 border-red-500" type="file"/>
        </div>
        </div>

       

        <input className="btn btn-primary flex justify-end mt-4 ml-auto" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ServiceList;
