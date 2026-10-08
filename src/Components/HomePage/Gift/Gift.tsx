
import React, { useEffect, useState } from "react";
import GiftModel from "../../../types/model";
const axios = require("axios").default;

const Gift = () => {
  const [gift, setGift] = useState<GiftModel[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get("Gift.json");
      setGift(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) {
    return <p>loading....</p>;
  }
  return (
    <div className="bg-white pt-12">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 text-secondary">
        <h2 className="text-4xl text-center">Special Gifts & Cards</h2>
        <div className="divider w-36 mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        </div>
        <p className="font-design text-center text-3xl">
          Easy to give. Delicious to enjoy
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {
            gift.map(g => <div
              data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
             key={g.userId} className="card rounded bg-base-100 hover:bg-neutral shadow-xl hover:text-primary mt-12">
            <div className="card-body">
              <h2 className="flex justify-center items-center gap-6 text-xl">
                <span>
                  <del className="text-gray-300">£{g.regularPrice}</del>
                </span>
                <span className="text-gray-500">
                £{g.currentPrice}
                </span>
              </h2>
              
            </div>
            <figure>
              <img src={g.photo} alt="flower" />
            </figure>
  
            <div className="m-6 text-center">
            <h2 className="text-lg">{g.name}</h2>
            <button className="btn btn-neutral py-2 px-6 mt-2 hover:bg-white hover:text-gray-600 text-primary">Select</button>
            </div>
          </div>)
          }
        </div>
        
      </div>
    </div>
  );
};

export default Gift;
