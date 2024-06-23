import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import createAccountImg from '../assets/createAccount_img.jpg'
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreateAccount = () => {
  const navigate=useNavigate();
    const [data,setData]=useState({ Username: "", email: "",AccountNo:"", currentBal: null })
    const handleName = (event) => {
        setData({ ...data, Username: event.target.value });
    };
    const handleEmail = (event) => {
        setData({ ...data, email: event.target.value });
    };
    const handleAccount=(event)=>{
      setData({...data,AccountNo:event.target.value});
    }
    const handleBalance = (event) => {
        setData({ ...data, currentBal: event.target.value });
    };
    console.log(data);
    const handleCreate = async () => {
      try {
        console.log(data);
          await axios.post('http://localhost:3000/createAccount', {data});
          navigate('/allcustomers')
      } catch (err) {
          console.log(err);
      }
  };
  
  return (
    <div className='bg-white'>
      <Navbar />
      <div className="flex justify-center py-5">
        <div className="card w-96 glass">
          <figure>
            <img
              src={createAccountImg}
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <label className="input input-bordered flex items-center gap-2 bg-violet-950">
              Name
              <input type="text" onChange={handleName} className="grow bg-white text-black rounded" placeholder=" Name" />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-violet-950">
              Email
              <input
                type="text"
                onChange={handleEmail}
                className="grow bg-white text-black rounded"
                placeholder=" xyz@gmail.com"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-violet-950">
              Account Number
              <input
                type='number'
                onChange={handleAccount}
                className="grow bg-white text-black rounded"
                placeholder=" 0123456789"
              />
            </label>
            <p className="text-black">Account number must be 10 digit</p>
            <label className="input input-bordered flex items-center gap-2 bg-violet-950">
              <input type='number' onChange={handleBalance} className="grow bg-white text-black rounded" placeholder=" Account limit" />
            </label>
            <div className="card-actions justify-end">
              <button onClick={handleCreate} className="btn btn-primary">Create</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
