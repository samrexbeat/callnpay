import React from "react";
import "./user.css";
import { NavLink } from "react-router-dom";
import Navbar from "./navbar";
import AdminSideBar from "./admin-side-bar";


const CardCreated = () => {
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

                <div className="card-cd -mt-20 ">

                    <h4 className="form-header mx-3"></h4>

                    <div className="">
    
                        <img src="./images/29.png" class=" mx-56 -mt-4 w-44 h-44 " alt="..."/>
                <h4 className="cardsucc px-8 mx-36 text-xl">Card Creation Successful</h4>
                <p className="sm-cards-text px-2 mx-44 ">Card has been created successfully. Agent can now assign card.</p>
                        
                      
                       
                       
                       
                    </div>
    
            
                

            


                </div>  


            </div>
                  
        </div>
</div>
        
        
    )
};

export default CardCreated;