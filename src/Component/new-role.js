import React from "react";
import "./user.css";
import { NavLink } from "react-router-dom";
import Navbar from "./navbar";
import AdminSideBar from "./admin-side-bar";


const NewRole = () => {
  return (
    <div className="flex base">
        <div className="user-side">
            <AdminSideBar/>
        </div>
        <div className="block">
        <Navbar/>

            <div className="main">
        
                <div className=" ">
                <h4 className="user py-28 top-24 px-72 ">New Role</h4>
                </div>    

                <div className="nw-role-form -mt-20">

                    <h4 className="form-header"></h4>

            
    
            
                <div className="label-form block px-11 -mt-12 ">
                    <label for="exampleFormControlInput1" class="form-label">Role name</label>
                    <input type="email" class="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Enter role name"/>
                </div>


                <div className="label-form block px-11 mt-9">
                <label for="exampleFormControlInput1" class="form-label">Authorization level</label>
                <select class="form-select" aria-label="">
                            <option selected>Select level</option>
                    </select>
                </div>
            
                <NavLink to="/assigned-user" className=" no-underline">
            <button className="buttonp mt-9 ">Create</button>
                  </NavLink>

            


                </div>  


            </div>
                  
        </div>
</div>
        
        
    )
};

export default NewRole;