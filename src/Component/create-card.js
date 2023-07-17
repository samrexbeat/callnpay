import React from "react";
import "./user.css";
import { NavLink } from "react-router-dom";
import Navbar from "./navbar";
import AdminSideBar from "./admin-side-bar";


const CreateCardMain = () => {
  return (
    <div className="flex base">
        <div className="user-side">
            <AdminSideBar/>
        </div>
        <div className="block">
        <Navbar/>

            <div className="main">
        
                <div className=" ">
                <h4 className="user py-28 top-24 px-72 ">Create Card</h4>
                </div>    

                <div className="nw-card -mt-20">

                    <h4 className="form-header mx-3">Select Card Type</h4>

                    <div className="flex justify-evenly px-5 mt-2">
                        <div className="sm-card-box">
                        <img src="./images/savings.svg" class="px-4 mb-4" alt="..."/>

                <h4 className="card-text px-4">Collo Savings</h4>
                <p className="sm-card-text px-4">You can now do all your regular
                    savings in one place now</p>
                        </div>
                      
                        <div className="sm-card-box">
                        <img src="./images/wallet_phone.png" class="px-4 mt- mb-4" alt="..."/>

                <h4 className="card-text px-4">Pocket Moni</h4>
                <p className="sm-card-text px-4">You can now do all your regular
                    savings in one place now</p>
                        
                        </div>
                       
                        <div className="sm-card-box">
                        <img src="./images/gift-card-color.svg" class="px-4 mt-3 mb-4" alt="..."/>

                <h4 className="card-text px-4">Student Card</h4>
                <p className="sm-card-text px-4">You can now do all your regular
                    savings in one place now</p>
                      
                        </div>
                    </div>
    
            
                
            <NavLink to="/card-details" className="no-underline">
            <button className="buttonc mt-9 mx-5 ">Proceed</button>
                  </NavLink>

            


                </div>  


            </div>
                  
        </div>
</div>
        
        
    )
};

export default CreateCardMain;