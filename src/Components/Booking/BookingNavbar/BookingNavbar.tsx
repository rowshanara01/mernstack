import React from "react";
import { Link, Outlet} from "react-router-dom";

const BookingNavbar = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col p-6 lg:p-12 bg-slate-100">
            <Outlet/>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
          <li>
              <Link to='/booking'>Booking list</Link>
            </li>
            <li>
              <Link to='review'>Review</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookingNavbar;
