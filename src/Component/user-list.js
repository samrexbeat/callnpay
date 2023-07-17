import React from "react";
import "./user.css";
import Navbar from "./navbar";
import AdminSideBar from "./admin-side-bar";
import { NavLink } from "react-router-dom";

const UserList = () => {
  return (
    
    <div className=" base">
        <div className="flex">
        <div>
        <AdminSideBar/>
        </div>
        <div className="block">
        <Navbar/>

            <div className="main">
        
                <div className="flex ">
                <h4 className="user py-10 px-12 ">Users</h4>
                <NavLink to="/new-user" className=" no-underline">
                <button className="buttonu py-1 mt-4">New Users</button>
                </NavLink>
                </div>

                <div className="flex -space-x-3">
                    <div className="display-box mx-12 p-3">
                        <p className="sm-in-box" >Total Users</p>
                        <h4 className="lg-in-box">129,189</h4>
                        <div className="flex ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M6.41668 11.6666V4.5645L3.15001 7.83117L2.33334 6.99992L7.00001 2.33325L11.6667 6.99992L10.85 7.83117L7.58334 4.5645V11.6666H6.41668Z" fill="#056839"/>
                        </svg>
                        <p className="xs-in-box mr-2">15%</p>
                        <p className="xs-in-box">Last month</p>
                        </div>
                    </div>

                    <div className="display-box mx-12 p-3">
                        <p className="sm-in-box" >Total Customers</p>
                        <h4 className="lg-in-box">1,275</h4>
                        <div className="flex ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M6.41668 11.6666V4.5645L3.15001 7.83117L2.33334 6.99992L7.00001 2.33325L11.6667 6.99992L10.85 7.83117L7.58334 4.5645V11.6666H6.41668Z" fill="#056839"/>
                        </svg>
                        <p className="xs-in-box mr-2">15%</p>
                        <p className="xs-in-box">Last month</p>
                        </div>

                    </div>
                    <div>

                    <div className=" display-box mx-12 p-3">
                        <p className="sm-in-box" >Total Agents s</p>
                        <h4 className="lg-in-box">234</h4>
                        <div className="flex ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M6.41666 2.33341V9.4355L3.15 6.16883L2.33333 7.00008L7 11.6667L11.6667 7.00008L10.85 6.16883L7.58333 9.4355V2.33341H6.41666Z" fill="#FF6161"/>
                        </svg>
                        <p className="xs-in-box mr-2">5%</p>
                        <p className="xs-in-box">Last month</p>
                        </div>
                        </div>
                    </div>
                    <div className="display-box mx-12 p-3">
                        <p className="sm-in-box" >Total Admin</p>
                        <h4 className="lg-in-box">121</h4>
                        <div className="flex ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M6.41668 11.6666V4.5645L3.15001 7.83117L2.33334 6.99992L7.00001 2.33325L11.6667 6.99992L10.85 7.83117L7.58334 4.5645V11.6666H6.41668Z" fill="#056839"/>
                        </svg>
                        <p className="xs-in-box mr-2">15%</p>
                        <p className="xs-in-box">Last month</p>
                        </div>
                     </div>
                 </div>

                 <div class="form-outline w-96 mt-6 mx-10 p-3 ">
                <input  id="search-input" type="search" class="form-control" placeholder= "Search Input field here" />
                </div>

              <div className="table-con">
              <table class="table ">
  <thead >
    <tr>
      <th scope="col">Date Joined</th>
      <th scope="col">Account No.</th>
      <th scope="col">Name</th>
      <th scope="col">No.of Accounts</th>
      <th scope="col">Balance</th>
      <th scope="col">Currency</th>
      <th scope="col">Last Activity</th>
      <th scope="col">Actions</th>
    </tr>
  </thead> 
  <tbody>
    <tr>

      <td>12/03/2021</td>
      <td>378272819</td>
      <td>Isaiah Arowolo Janet</td>
      <td>2</td>
      <td>₦120,394</td>
      <td>NGN</td>
      <td>12/03/2021</td>
      <td><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_529_9843)">
    <path d="M12 16.5C12.3978 16.5 12.7794 16.658 13.0607 16.9393C13.342 17.2206 13.5 17.6022 13.5 18C13.5 18.3978 13.342 18.7794 13.0607 19.0607C12.7794 19.342 12.3978 19.5 12 19.5C11.6022 19.5 11.2206 19.342 10.9393 19.0607C10.658 18.7794 10.5 18.3978 10.5 18C10.5 17.6022 10.658 17.2206 10.9393 16.9393C11.2206 16.658 11.6022 16.5 12 16.5ZM12 10.5C12.3978 10.5 12.7794 10.658 13.0607 10.9393C13.342 11.2206 13.5 11.6022 13.5 12C13.5 12.3978 13.342 12.7794 13.0607 13.0607C12.7794 13.342 12.3978 13.5 12 13.5C11.6022 13.5 11.2206 13.342 10.9393 13.0607C10.658 12.7794 10.5 12.3978 10.5 12C10.5 11.6022 10.658 11.2206 10.9393 10.9393C11.2206 10.658 11.6022 10.5 12 10.5ZM12 4.5C12.3978 4.5 12.7794 4.65804 13.0607 4.93934C13.342 5.22064 13.5 5.60218 13.5 6C13.5 6.39782 13.342 6.77936 13.0607 7.06066C12.7794 7.34196 12.3978 7.5 12 7.5C11.6022 7.5 11.2206 7.34196 10.9393 7.06066C10.658 6.77936 10.5 6.39782 10.5 6C10.5 5.60218 10.658 5.22064 10.9393 4.93934C11.2206 4.65804 11.6022 4.5 12 4.5Z" fill="black"/>
  </g>
  <defs>
    <clipPath id="clip0_529_9843">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg></td>
    </tr>
    <tr>

      <td>12/03/2021</td>
      <td>378272819</td>
      <td>Isaiah Arowolo Janet</td>
      <td>2</td>
      <td>₦120,394</td>
      <td>NGN</td>
      <td>12/03/2021</td>
      <td><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_529_9843)">
    <path d="M12 16.5C12.3978 16.5 12.7794 16.658 13.0607 16.9393C13.342 17.2206 13.5 17.6022 13.5 18C13.5 18.3978 13.342 18.7794 13.0607 19.0607C12.7794 19.342 12.3978 19.5 12 19.5C11.6022 19.5 11.2206 19.342 10.9393 19.0607C10.658 18.7794 10.5 18.3978 10.5 18C10.5 17.6022 10.658 17.2206 10.9393 16.9393C11.2206 16.658 11.6022 16.5 12 16.5ZM12 10.5C12.3978 10.5 12.7794 10.658 13.0607 10.9393C13.342 11.2206 13.5 11.6022 13.5 12C13.5 12.3978 13.342 12.7794 13.0607 13.0607C12.7794 13.342 12.3978 13.5 12 13.5C11.6022 13.5 11.2206 13.342 10.9393 13.0607C10.658 12.7794 10.5 12.3978 10.5 12C10.5 11.6022 10.658 11.2206 10.9393 10.9393C11.2206 10.658 11.6022 10.5 12 10.5ZM12 4.5C12.3978 4.5 12.7794 4.65804 13.0607 4.93934C13.342 5.22064 13.5 5.60218 13.5 6C13.5 6.39782 13.342 6.77936 13.0607 7.06066C12.7794 7.34196 12.3978 7.5 12 7.5C11.6022 7.5 11.2206 7.34196 10.9393 7.06066C10.658 6.77936 10.5 6.39782 10.5 6C10.5 5.60218 10.658 5.22064 10.9393 4.93934C11.2206 4.65804 11.6022 4.5 12 4.5Z" fill="black"/>
  </g>
  <defs>
    <clipPath id="clip0_529_9843">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg></td>
    </tr>
    <tr>

      <td>12/03/2021</td>
      <td>378272819</td>
      <td>Isaiah Arowolo Janet</td>
      <td>2</td>
      <td>₦120,394</td>
      <td>NGN</td>
      <td>12/03/2021</td>
      <td><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_529_9843)">
    <path d="M12 16.5C12.3978 16.5 12.7794 16.658 13.0607 16.9393C13.342 17.2206 13.5 17.6022 13.5 18C13.5 18.3978 13.342 18.7794 13.0607 19.0607C12.7794 19.342 12.3978 19.5 12 19.5C11.6022 19.5 11.2206 19.342 10.9393 19.0607C10.658 18.7794 10.5 18.3978 10.5 18C10.5 17.6022 10.658 17.2206 10.9393 16.9393C11.2206 16.658 11.6022 16.5 12 16.5ZM12 10.5C12.3978 10.5 12.7794 10.658 13.0607 10.9393C13.342 11.2206 13.5 11.6022 13.5 12C13.5 12.3978 13.342 12.7794 13.0607 13.0607C12.7794 13.342 12.3978 13.5 12 13.5C11.6022 13.5 11.2206 13.342 10.9393 13.0607C10.658 12.7794 10.5 12.3978 10.5 12C10.5 11.6022 10.658 11.2206 10.9393 10.9393C11.2206 10.658 11.6022 10.5 12 10.5ZM12 4.5C12.3978 4.5 12.7794 4.65804 13.0607 4.93934C13.342 5.22064 13.5 5.60218 13.5 6C13.5 6.39782 13.342 6.77936 13.0607 7.06066C12.7794 7.34196 12.3978 7.5 12 7.5C11.6022 7.5 11.2206 7.34196 10.9393 7.06066C10.658 6.77936 10.5 6.39782 10.5 6C10.5 5.60218 10.658 5.22064 10.9393 4.93934C11.2206 4.65804 11.6022 4.5 12 4.5Z" fill="black"/>
  </g>
  <defs>
    <clipPath id="clip0_529_9843">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg></td>
    </tr>
  </tbody>
</table>
              </div>


              <div className="page mt-10 mx-10">
              <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item mr-3">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item mr-3"><a class="page-link" href="#">1</a></li>
    <li class="page-item mr-3"><a class="page-link" href="#">2</a></li>
    <li class="page-item mr-3"><a class="page-link" href="#">3</a></li>
    <li class="page-item mr-3"><a class="page-link" href="#">4</a></li>
    <li class="page-item mr-3">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
                </div>      


            </div>
                  
        </div>
</div>
</div>
        
    )
};

export default UserList;