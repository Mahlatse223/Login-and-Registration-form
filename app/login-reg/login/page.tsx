"use client";

import Link from "next/link";
import React, { useState } from "react";



export default function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    // Validate password for at least one letter or special character
    if (!/[a-zA-Z!@#$%^&*(),.?":{}|<>]/.test(value)) {
      setErrorMessage("Password must include at least one letter or special character.");
    } else {
      setErrorMessage("");
    }
  };
  return (
    
    <form className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Sign in</h2>
       <div>
       
        <div>
          <label htmlFor="" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input  type="email"
          id="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        
        
        <div>
          <label htmlFor="" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input  type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className={`w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 ${
            errorMessage ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
          }`}
           />
     <div className="flex justify-between items-center">
     <div className="flex items-center space-x-1 mt-3">
      <input
        type="checkbox"
        id="showPassword"
        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        checked={showPassword}
        onChange={togglePasswordVisibility} />
         <label htmlFor="" className="text-sm text-gray-700">Show password</label> 
         </div>
         
         <div className= "flex items-center mt-3 ">
         <h2 className="text-sm text-gray-700">Don&apos;t have an account?</h2>
          <h2 className="text-sm text-blue-500 pl-1">
          <Link href="/reg">Register</Link>
          </h2>
         </div>
        </div>
     </div>

       </div>
      </div>
      <div className="text-center mt-6">
        <input  type="button"
      value="Register"
      className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 cursor-pointer" />
      </div>
    </form>
  )
}



