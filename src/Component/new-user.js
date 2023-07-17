import React from "react";
import "./user.css";
import { NavLink } from "react-router-dom";
import Navbar from "./navbar";
import AdminSideBar from "./admin-side-bar";


const NewUser = () => {
  return (
    <div className="flex base">
        <div className="user-side">
            <AdminSideBar/>
        </div>
        <div className="block">
        <Navbar/>

            <div className="main">
        
                <div className=" ">
                <h4 className="user py-28 top-24 px-72 ">New User</h4>
                </div>    

                <div className="nw-uers-form -mt-20">

                    <h4 className="form-header">User Information</h4>

            <div className="flex space-x-10 mx-5 -mt-2">
                <div className="label-form block">
                     <label for="exampleFormControlInput1" class="form-label">First name</label>
                     <input type="email" class="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Enter first name"/>
                </div>
                <div className="label-form block">
                    <label for="exampleFormControlInput1" class="form-label">Last name</label>
                    <input type="email" class="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Enter Last name"/>
                </div>
    
            </div>
                <div className="label-form block px-11 mt-3">
                    <label for="exampleFormControlInput1" class="form-label">User name</label>
                    <input type="email" class="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Enter user name"/>
                </div>

                <div className="label-form block px-11 mt-3">
                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                    <input type="email" class="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Enter email"/>
                </div>

                <div className="label-form block px-11 mt-3">
                <label for="exampleFormControlInput1" class="form-label">Phone number</label>
                <select class="form-select" aria-label="">
                            <option selected>+234</option>
                            <option value="1">+233</option>
                            <option value="2">+232</option>
                            <option value="3">+231</option>
                    </select>
                </div>
                
                <div className="flex space-x-10 mx-5 mt-4">
                <div className="label-form block">
                     <label for="exampleFormControlInput1" class="form-label">Country</label>
                     <input type="email" class="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Select"/>
                </div>
                <div className="label-form block">
                    <label for="exampleFormControlInput1" class="form-label">State</label>
                    <input type="email" class="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Select"/>
                </div>
    
            </div>

            <div className="flex space-x-10 mx-5 mt-2">
                <div className="label-form block">
                     <label for="exampleFormControlInput1" class="form-label">Gender</label>
                     <input type="email" class="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Select"/>
                </div>
                <div className="label-form block">
                    <label for="exampleFormControlInput1" class="form-label">Date of Birth</label>
                    <input type="email" class="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Select"/>
                </div>
    
            </div>
            <NavLink to="" className=" no-underline"></NavLink>
            <button className="buttonp mt-4 ">Create</button>
                  

            


                </div>  


            </div>
                  
        </div>
</div>
        
        
    )
};

export default NewUser;