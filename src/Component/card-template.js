import React from "react";
import "./user.css";
import { NavLink } from "react-router-dom";
import Navbar from "./navbar";
import AdminSideBar from "./admin-side-bar";


const CardTemplate = () => {
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

                    <h4 className="form-header mx-3"> Select template</h4>

                    <div className="flex">

                        <img src="./images/Frame 4529.png" class=" mx-12 px-2  " alt="..."/>
                        <img src="./images/Frame 4530.png" class=" -mx-6 " alt="..."/>
                        
                
                       
                       
                       
                    </div>
                    <div className=" flex space-x-5 mt-14 mx-14 ">
                     <NavLink to="/card-overview" className=" no-underline">   
                    <button className="buttoncc1">Back</button>
                    </NavLink>
                    <NavLink to="/created" className=" no-underline">
                    <button className="buttoncc2">Next</button>
                        </NavLink>
                    </div>

                </div>  


            </div>
                  
        </div>
</div>
        
        
    )
};

export default CardTemplate;