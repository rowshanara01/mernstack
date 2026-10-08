import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import Loading from "../../Hooks/Loading/Loading";

interface Product {
  _id: number,
  productName?: string,
  name?:string,
  description?: string,
  photo?:any
}
const stripePromise = loadStripe(
  "pk_test_51L0kNCFNu1QzxAujT7H5defX0vjCNRCrTR97rqiI3I6dcQJg4Z4e7ullhZVkJMSZe6WYNG6On3BDfGeGv5I9d83N004JEamegQ"
);
const BookingDetails = () => {
  const {id} = useParams();
  const [service, setService] = useState<Product>({} as Product);
  const [loading, setLoading] = useState<Boolean>(false);
  const user = {
    name: "Jhon Dany",
    email: "jhondany@mail.com",
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(`https://agile-cove-82104.herokuapp.com/myOrder/${id}`);
      setService(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  console.log(service);

  if (loading) {
    return <Loading/>;
  }

  return (
    <div
      data-aos="flip-left"
      data-aos-easing="linear"
      data-aos-duration="1500"
      data-aos-offset="500"
      className="max-w-xs flex flex-col justify-center gap-y-6"
    >
      <input
        type="text"
        value={user.name}
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="text"
        value={user.email}
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="text"
        value={service?.productName}
        className="input input-bordered w-full max-w-xs"
      />
      <p className="text-xs">Pay with</p>
      <p className="text-xl font-bold">Creadit Card</p>

      <Elements stripe={stripePromise}>
        <CheckoutForm user={user} service={service} />
      </Elements>
    </div>
  );
};

export default BookingDetails;
