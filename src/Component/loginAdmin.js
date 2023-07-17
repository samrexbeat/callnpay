import React from "react";
import "./login.css";
import { NavLink } from "react-router-dom";

const LoginAdmin = () => {
  return (
    <div className="flex">
        <div className="login-side bg-">
            <h6 className="login-logo mx-4 px-4 mt-10 ">CallnPay</h6>
            <h4 className="side-text mx-5 py-4 mt-10 ">CallnPay Card
Management System</h4>
            <p className="sm-text mx-5 mt-1 ">Create and Monitor all card activities</p>
        </div>
        <div >
                <h4 className="welcome py-10 mt-24 px-72 ">Welcome</h4>
                <p className="sm-welcome -mt-10 px-72">Set a password to proceed</p>
                
                <div className="input-box">
                
                <div className="input mt-12">
                <div class="mb-3 ">
                  <label for="" class="form-label">Password</label>
                  <input type="password" class="form-control form-control-lg" name="" id="" placeholder="Enter Password"/>
                </div>
                <div class="mb-3 mt-8 py-1">
                  <label for="" class="form-label">Confirm Password</label>
                  <input type="password" class="form-control form-control-lg" name="" id="" placeholder="Enter Password"/>
                </div>
            
                </div>
                        <NavLink to="/login-admin">
                        <button className="buttonp mt-10 py-2 p-8">Proceed</button>
                        </NavLink>
                </div>
                </div>
        </div>
        
        
    )
};

export default LoginAdmin;