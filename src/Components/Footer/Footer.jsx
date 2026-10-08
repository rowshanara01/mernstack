import React from "react";
import logo from "../../image/Icon/map-pin-2-fill.png";

const Footer = () => {
  return (
    <div className="">
      <footer class="footer p-10 bg-primary text-base-content text-white">
        <div className="flex justify-center items-center">
          <img className="" src={logo} alt="" />
          <p>
            H#000 (0th Floor), Road #00,
            <br />
            New DOHS, Mohakhali, Dhaka, Bangladesh
          </p>
        </div>
        <div>
          <span class="font-bold text-lg text-white">Services</span>
          <a class="link link-hover">Branding</a>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
        </div>
        <div>
          <span class="font-bold text-lg text-white">Company</span>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </div>
        <div>
          <span class="font-bold text-lg text-white">Legal</span>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
