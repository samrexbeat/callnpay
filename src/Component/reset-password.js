import React from "react";
import "./login.css";
import reCAPTCHA from "react-google-recaptcha"

const ResetPassword = () => {
  return (
    <div className="flex">
        <div className="login-side bg-">
            <h6 className="login-logo mx-4 px-4 mt-10 ">CallnPay</h6>
            <h4 className="side-text mx-5 py-4 mt-10 ">CallnPay Card
Management System</h4>
            <p className="sm-text mx-5 mt-1 ">Create and Monitor all card activities</p>
        </div>
        <div >
                <h4 className="welcome py-10 mt-24 px-72 ">Forgot Password</h4>
                <p className="sm-welcome -mt-10 px-72">Enter email to receive reset password link</p>
                
                <div className="input-box">
                
                <div className="input mt-12">
                <div class="mb-3 ">
                  <label for="" class="form-label">Email</label>
                  <input type="Email" class="form-control form-control-lg" name="" id="" placeholder="Enter email"/>
                </div>

                <reCAPTCHA />

                </div>
                 <button className="buttonp mt-10 ">Proceed</button>
                  
                </div>
                </div>
        </div>
        
        
    )
};

export default ResetPassword;