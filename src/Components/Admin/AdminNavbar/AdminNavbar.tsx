import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col p-6 lg:p-12 bg-slate-100">
        <label htmlFor="my-drawer-1" className="btn btn-ghost lg:hidden">
            open
        </label>
            <Outlet/>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-1" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
            <li>
              <Link to='/order'>Order list</Link>
            </li>
            <li>
              <Link to='addService'>Add service</Link>
            </li>
            <li>
              <Link to='makeAdmin'>Make Admin</Link>
            </li>
            <li>
              <Link to='manageServices'>Manage Services</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
