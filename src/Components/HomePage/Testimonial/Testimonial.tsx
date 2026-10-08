import axios from "axios";
import React, { useState } from "react";
import UserReview from "../../../types/model"
const Testimonial = () => {
  const [review, setReview] = useState<UserReview[]>([]);

  axios.get('https://agile-cove-82104.herokuapp.com/review')
  .then(res => setReview(res.data));

  return (
    <div className="p-12">
      <h2 className="text-4xl text-center font-bold">Testimonials</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
        {
          review.reverse().slice(0,3).map(r => <div
            data-aos="zoom-in-left"
             className="card bg-base-100">
              <div className="flex flex-row gap-x-3 items-center justify-start m-6">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src="https://placeimg.com/192/192/people" alt="" />
                  </div>
                </div>
                <div className="div">
                  <h4>{r?.name}</h4>
                  <p>{r?.company}</p>
                </div>
              </div>
              <div className="mx-6">
                <p className="text-sm">
                 {r?.description}
                </p>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>)
        }
      </div>
    </div>
  );
};

export default Testimonial;
