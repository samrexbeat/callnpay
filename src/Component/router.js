import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import LoginAdmin from "./loginAdmin";
import LoginMain from "./login";
import ResetPassword from "./reset-password";
import ResetLink from "./reset-link-sent";
import UserList from "./user-list";
import NewUser from "./new-user";
import Transactions from "./transactions";
import Cards from "./card";
import Roles from "./roles";
import NewRole from "./new-role";
import AssignedUser from "./assigned-user";
import CreateCardMain from "./create-card";
import CardCreated from "./card-created";
import CardTemplate from "./card-template";
import CardOverview from "./card-overview";
import CardDetails from "./card-details";

export default function Router(){
    return(
        <Router>
            
            <Routes>
                    {/* login */}
                    <Route path="/setpassword" element={<LoginAdmin/>} />
                    <Route path="/login-admin" element={<LoginMain/>} />
                    <Route path="/reset-password" element={<ResetPassword/>} />
                    <Route path="/reset-link" element={<ResetLink/>} />

                    {/* user */}
                    <Route path="/user-list" element={<UserList/>} />
                    <Route path="/new-user" element={<NewUser/>} />
                    <Route path="/transactions" element={<Transactions/>} />
                    <Route path="/cards" element={<Cards/>} />
                    <Route path="/roles" element={<Roles/>} />
                    <Route path="/new-role" element={<NewRole/>} />
                    <Route path="/assigned-user" element={<AssignedUser/>} />
                    <Route path="/create-card" element={<CreateCardMain/>} />
                    <Route path="/created" element={<CardCreated/>} />
                    <Route path="/template" element={<CardTemplate/>} />
                    <Route path="/card-overview" element={<CardOverview/>} />
                    <Route path="/card-details" element={<CardDetails/>} />

                   
            </Routes>
        </Router>
    
        
    )
}; 