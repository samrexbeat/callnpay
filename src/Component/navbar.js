import React from "react";
import "./user.css";




const searchFocus = () => { 
  const keys = [
    { keyCode: 'AltLeft', isTriggered: false },
    { keyCode: 'ControlLeft', isTriggered: false },
  ];
  
  window.addEventListener('keydown', (e) => {
    keys.forEach((obj) => {
      if (obj.keyCode === e.code) {
        obj.isTriggered = true;
      }
    });
  
    const shortcutTriggered = keys.filter((obj) => obj.isTriggered).length === keys.length;
  
    if (shortcutTriggered) {
      searchFocus.focus();
    }
  });
  
  window.addEventListener('keyup', (e) => {
    keys.forEach((obj) => {
      if (obj.keyCode === e.code) {
        obj.isTriggered = false;
      }
    });
  });
 
  }



const Navbar = () => {
  return (
       <>
   <div className="navbar flex ">
   <div class="form-outline px-10 ">
   <button >
          <input  id="search-focus" type="search" class="form-control" placeholder= "Search" onChange={searchFocus} />
          </button>
        </div>
        <div className=" flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" stroke="#898989" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10" stroke="#898989" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<div>
    <img src="./images/Image.png" class="px-4 mb-4 " alt="..."/>
   
    {/* <div>
    <h6>Gbemi Akinjo</h6>
    <p>Admin</p>
    </div> */}
    </div>
        </div>

  </div>
  

         
        </>
    )
};

export default Navbar;