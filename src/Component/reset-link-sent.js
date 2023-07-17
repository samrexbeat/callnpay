import React from "react";
import "./login.css";

const ResetLink = () => {
  return (
    <div>
        <h6 className="login-logo mx-4 px-4 mt-10 ">CallnPay</h6>
        <div className="locks flex justify-center mt-16">
        <img src="./images/frame.svg" class="locks " alt="locks"/>
        </div>

                <h4 className="Email-sent py-10 mt-2 px-72 text-center ">Email Sent</h4>
                <p className="sm-welcome -mt-10 px-72 text-center">You have successfully set a new password for your account</p>
                
               
            
                <div className="flex justify-center">
                 <button className="buttonp mt-10 py-2 p-8">Login to continue</button>
                 </div>
                </div>
    
        
        
        
    )
};

export default ResetLink;