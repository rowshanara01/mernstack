import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Products from "../../../types/model";
import Loading from "../../Hooks/Loading/Loading";

const BookingList = () => {
  const [order, setOrder] = useState<Products[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  const user = {
    name: "Jhon Dany",
    email: "jhondany@mail.com",
  };

  console.log(order);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://agile-cove-82104.herokuapp.com/myProduct/${user.email}`
      );
      setOrder(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {order.map((o) => (
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="card-actions justify-between items-center">
              <img className="w-16" src={o.photo} alt="" />
              <div className="">
                {
                  (o.price && !o.paid) && <Link to={`/booking/book/${o._id}`}><button className="btn btn-xs bg-red-100 text-red-500 border-0 hover:bg-primary hover:text-white">pending</button></Link>
                }
                {
                  (o.price && o.paid) && <button className="btn btn-xs bg-LightCyan">Done</button>
                }
              </div>
            </div>
            <p>{o.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookingList;
