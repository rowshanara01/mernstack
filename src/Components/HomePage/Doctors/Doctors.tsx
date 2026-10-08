import axios from "axios";
import React, { useEffect, useState } from "react";
import DoctorsModel from "../../../types/model";
import Divider from "../../Hooks/Divider/Divider";

const Doctors = () => {
  const [doctors, setDoctors] = useState<DoctorsModel[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get("Doctors.json");
      setDoctors(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) {
    return <p>loading....</p>;
  }
  return (
    <div className="bg-accent mt-12 pt-12">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl text-center">Meet Our Experts</h2>
        <Divider w={"w-36"} />
        <p className="font-design text-center text-3xl">
          The people of Spa wellness behind us
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {doctors.map((doctor) => (
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              key={doctor.userId}
              className="card mb-12 mt-12 border rounded bg-base-100 hover:bg-neutral shadow-xl"
            >
              <figure className="mt-6">
                <div className="avatar">
                  <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={doctor.photo} alt="" />
                  </div>
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="text-lg">{doctor.name}</h2>
                <p className="text-xs">{doctor.experience}</p>

                <Divider w={"w-full"} />
                <div className="card-actions flex flex-col justify-center items-center">
                  <p className="text-sm">Email : {doctor.email}</p>
                  <div className="flex justify-around gap-6 mt-6">
                    <p>fb</p>
                    <p>li</p>
                    <p>li</p>
                    <p>li</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
