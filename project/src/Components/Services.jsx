import React, { useState } from "react";
import customerImg from "../assets/customer.png";

import transactionImg from "../assets/transaction.png";
import createAccImg from "../assets/createAccount.png";
import { Link, useNavigate } from "react-router-dom";

const Services = () => {
    const navigate=useNavigate();
  const handleCreateAccount = () => {
    navigate('/createAccount');
  };
  return (
    <div className="bg-white">
      <div className="flex justify-center py-3">
        <p className="text-4xl font-bold text-black">Our Services</p>
      </div>
      <div className="flex flex-wrap py-5 justify-center gap-5 px-2">
        <div className=" flex flex-col justify-center">
          <img
            src={customerImg}
            alt="image"
            className="border-black rounded-3xl border-solid border-x-2 border-y-2 h-[200px] w-[200px]"
          />
          <Link to="/allcustomers">
            <button className="btn my-3 text-xl bg-violet-950 hover:bg-violet-700 text-white font-semibold">
              View Customers
            </button>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src={transactionImg}
            alt="image"
            className="border-black rounded-3xl border-solid border-x-2 border-y-2 h-[200px] w-[200px]"
          />
          <Link to="/sendMoney"><button className="btn my-3 text-xl bg-violet-950 hover:bg-violet-700 text-white font-semibold">
            Send Money
          </button></Link>
        </div>
        <div className="flex flex-col justify-center">
          <img
            src={createAccImg}
            alt="image"
            className="border-black rounded-3xl border-solid border-x-2 border-y-2 h-[200px] w-[200px]"
          />
          <button
            onClick={handleCreateAccount}
            className="btn my-3 text-xl bg-violet-950 hover:bg-violet-700 text-white font-semibold"
          >
            Create Account
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Services;
