import axios from "axios";
import React, { useEffect, useState } from "react";
import Products from "../../../types/model";
import Loading from "../../Hooks/Loading/Loading";

const OrderList = () => {
  const [allOrders, setOrders] = useState<Products[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get("https://agile-cove-82104.herokuapp.com/booking");
      setOrders(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) {
    return <Loading />;
  }
  const handleOrder = (id:any) => {
    const confirmDelete = window.confirm("your sure delete this order");
    console.log(confirmDelete);
    if(confirmDelete === true){
      axios.delete(`https://agile-cove-82104.herokuapp.com/booking/${id}`)
    .then(res => {
      if(res.data.acknowledged){
        alert("successfully delete order");
      }
      console.log(res.data.acknowledged)
    })
    }
    
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email ID</th>
              <th>Service</th>
              <th>Pay With</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              allOrders.map(order => <tr key={order._id}>
                <td>{order?.userName} </td>
                <td>{order.email}</td>
                <td>{order.productName}</td>
                <td>Creadit Card</td>
                <td>
                  {
                    order.paid ? <button className="text-green-500">Done</button> : <button onClick={() => handleOrder(order._id)} className="text-primary">pending</button>
                  }
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
