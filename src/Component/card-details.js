import React, { useState, useEffect } from "react";
import "./user.css";
import { NavLink } from "react-router-dom";
import Navbar from "./navbar";
import AdminSideBar from "./admin-side-bar";



const CardDetails = () => {
  return (
    <div className="flex base">
        <div className="user-side">
            <AdminSideBar/>
        </div>
        <div className="block">
        <Navbar/>

            <div className="main">
        
                <div className=" ">
                <h4 className="user py-28 top-10 px-72 ">Create Card</h4>
                </div>    

                <div className="card-cd2 -mt-20 ">

                    <h4 className="form-header mx-3"> More details</h4>

                <div className="flex -space-x-8 -mt-5 mx-">
                    <p className="sm-cardss-text -mx-16 px-2 mr-1">Card</p>
                    <p className="sm-cardss-text">Quantity</p>
                    <p className="sm-cardss-text mx-20 ">Expiry Date</p>
                    
                </div>
                <hr className="mx-5 -mt-3"/>

                <div className="flex -space-x-8 ">
                    <div className="flex -space-x-8">
                    <img src="./images/savings.svg" class=" mx-12 px-2  " alt="..."/>
                    <div className="block">
                    <p className="card-text">Collo Savings</p>
                    <p className="sm-cards-text2 -mt-3 mr-2">Physical</p>
                    </div>
                    </div>

                    <div className="sm-cards-text px-2">
                        <div className="flex mx-20">
                        <button className="bg-white border-gray-300 border-2 w-7 h-7 rounded-full text-gray-300 test-md mr-2">-</button>
                    
                    <div className="sm-cards-text px-2 border-4 border-gray mr-2 ">5</div>
                    
                    <button className="bg-white border-gray-300 border-2 w-7 h-7 rounded-full text-gray-300 text-md mr-24">+</button>
                    </div>
                     </div>
                    <p className="sm-cards-text ">23/08/2031</p>
                    
                </div>
                <hr className="mx-5"/>

                <div className="flex -space-x-8  mb-4">
                <div className="flex -space-x-8">
                    <img src="./images/wallet_phone.png" class=" mx-12 px-2  " alt="..."/>
                    <div className="block -mx-4">
                    
                    <p className="card-text text-xs">Pocket Moni</p>
                    <p className="sm-cards-text2 -mt-3 -mx-1 -mr-3 ">Physical</p>
                    </div>
                    </div>
                    <div className="sm-cards-text px-2">
                        <div className="flex mx-20">
                        <button className="bg-white border-gray-300 border-2 w-7 h-7 rounded-full text-gray-300 test-md mr-2">-</button>
                    
                    <div className="sm-cards-text px-2 border-4 border-gray mr-2">5</div>
                    
                    <button className="bg-white border-gray-300 border-2 w-7 h-7 rounded-full text-gray-300 text-md mr-24">+</button>
                    </div>
                     </div>
                    <p className="sm-cards-text ">23/08/2031</p>
                    
                </div>
                <div className=" flex space-x-5 mt-14 mx-14 ">
                    <NavLink to="/create-card" className="no-underline">
                    <button className="buttoncc1">Back</button>
                    </NavLink>
                    <NavLink to="/card-overview" className="no-underline">
                    <button className="buttoncc2">Next</button>
                    </NavLink>
                    </div>
                    

                </div>  


            </div>
                  
        </div>
</div>
        
        
    )
};

export default CardDetails;

