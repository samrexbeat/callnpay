import React from "react";
import "./user.css";
import { NavLink } from "react-router-dom";



const AdminSideBar = () => {
  return (
    
        <div className="user-side">
            <h6 className="login-logo mx-4 px-4 mt-10 ">CallnPay</h6>
         
           
            <div className="mt-12 py-2">
                <div className=" dash-tab hover:bg-slate-100 hover:text-sky-950">
                    <NavLink to="/user-list" className="flex space-x-3 no-underline" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z" stroke="#9F9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z" stroke="#9F9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z" stroke="#9F9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z" stroke="#9F9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        <h5 className="h-5 py-1 ">Dashboard</h5>
                        </NavLink>
                </div>
                <div className=" dash-tab hover:bg-slate-100">
                    <NavLink to="/user-list" className="flex space-x-3 no-underline" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M9.16 10.87C9.06 10.86 8.94 10.86 8.83 10.87C6.45 10.79 4.56 8.84 4.56 6.44C4.56 3.99 6.54 2 9 2C11.45 2 13.44 3.99 13.44 6.44C13.43 8.84 11.54 10.79 9.16 10.87Z" stroke="#9F9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.41 4C18.35 4 19.91 5.57 19.91 7.5C19.91 9.39 18.41 10.93 16.54 11C16.46 10.99 16.37 10.99 16.28 11" stroke="#9F9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.15997 14.56C1.73997 16.18 1.73997 18.82 4.15997 20.43C6.90997 22.27 11.42 22.27 14.17 20.43C16.59 18.81 16.59 16.17 14.17 14.56C11.43 12.73 6.91997 12.73 4.15997 14.56Z" stroke="#9F9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.34 20C19.06 19.85 19.74 19.56 20.3 19.13C21.86 17.96 21.86 16.03 20.3 14.86C19.75 14.44 19.08 14.16 18.37 14" stroke="#9F9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        <h5 className="h-5 py-1 ">Users </h5>
                        </NavLink>
                </div>
                <div className=" dash-tab hover:bg-slate-100">
                    <NavLink to="/transactions" className="flex space-x-3 no-underline" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M15 22.75H9C4.59 22.75 3.25 21.41 3.25 17V7C3.25 2.59 4.59 1.25 9 1.25H15C19.41 1.25 20.75 2.59 20.75 7V17C20.75 21.41 19.41 22.75 15 22.75ZM9 2.75C5.42 2.75 4.75 3.43 4.75 7V17C4.75 20.57 5.42 21.25 9 21.25H15C18.58 21.25 19.25 20.57 19.25 17V7C19.25 3.43 18.58 2.75 15 2.75H9Z" fill="#9F9C9C"/>
  <path d="M14 6.25H10C9.59 6.25 9.25 5.91 9.25 5.5C9.25 5.09 9.59 4.75 10 4.75H14C14.41 4.75 14.75 5.09 14.75 5.5C14.75 5.91 14.41 6.25 14 6.25Z" fill="#9F9C9C"/>
  <path d="M12 19.8598C10.73 19.8598 9.70001 18.8298 9.70001 17.5598C9.70001 16.2898 10.73 15.2598 12 15.2598C13.27 15.2598 14.3 16.2898 14.3 17.5598C14.3 18.8298 13.27 19.8598 12 19.8598ZM12 16.7498C11.56 16.7498 11.2 17.1098 11.2 17.5498C11.2 17.9898 11.56 18.3498 12 18.3498C12.44 18.3498 12.8 17.9898 12.8 17.5498C12.8 17.1098 12.44 16.7498 12 16.7498Z" fill="#9F9C9C"/>
</svg>

                        <h5 className="h-5 py-1 ">Transactions </h5>
                        </NavLink>
                </div>
                
                <div className=" dash-tab hover:bg-slate-100">
                    <NavLink to="/cards" className="flex space-x-3 no-underline" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M2 8.50488H22" stroke="#9F9C9C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6 16.5049H8" stroke="#9F9C9C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.5 16.5049H14.5" stroke="#9F9C9C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.44 3.50488H17.55C21.11 3.50488 22 4.38488 22 7.89488V16.1049C22 19.6149 21.11 20.4949 17.56 20.4949H6.44C2.89 20.5049 2 19.6249 2 16.1149V7.89488C2 4.38488 2.89 3.50488 6.44 3.50488Z" stroke="#9F9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        <h5 className="h-5 py-1 ">Card and PIN  </h5>
                        </NavLink>
                </div>
                
                <div className=" dash-tab hover:bg-slate-100">
                    <NavLink to="/roles" className="flex space-x-3 no-underline" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z" stroke="#011F78" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5" stroke="#011F78" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 13H12" stroke="#011F78" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 17H16" stroke="#011F78" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        <h5 className="h-5 py-1 ">Roles</h5>
                        </NavLink>
                </div>


                <div className=" dash-tab hover:bg-slate-100">
                    <NavLink to="#" className="flex space-x-3 no-underline" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z" stroke="#9F9C9C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5" stroke="#9F9C9C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 13H12" stroke="#9F9C9C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 17H16" stroke="#9F9C9C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        <h5 className="h-5 py-1 ">Report </h5>
                        </NavLink>
                </div>
                
                <div className=" dash-tab hover:bg-slate-100">
                    <NavLink to="#" className="flex space-x-3 no-underline" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12.37 8.87988H17.62" stroke="#9F9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.38 8.87988L7.13 9.62988L9.38 7.37988" stroke="#9F9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12.37 15.8799H17.62" stroke="#9F9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.38 15.8799L7.13 16.6299L9.38 14.3799" stroke="#9F9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#9F9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        <h5 className="h-5 py-1 ">Audit Tray</h5>
                        </NavLink>
                </div>
                
                <div className=" dash-tab hover:bg-slate-100">
                    <NavLink to="#" className="flex space-x-3 no-underline" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#9F9C9C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z" stroke="#9F9C9C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        <h5 className="h-5 py-1 ">Settings</h5>
                        </NavLink>
                </div>
                
            </div>
            </div>



            )
};

export default AdminSideBar;