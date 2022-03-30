import React, { useState } from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Navbar = () => {
  const [isScrolled,setIsScrolled] = useState(false);
  window.onscroll = () =>{
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  
  return (
    <div className={isScrolled ? "navbar Scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img src="https://assets.brand.microsites.netflix.io/assets/7dc497e2-4975-11ec-a9ce-066b49664af6_cm_1440w.jpg?v=1" alt="netflix logo" />
                <span>HomePage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New And Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
              <SearchIcon className="icon"/>
              <span>KID</span>
              <NotificationsIcon className="icon"/>
              <img src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              
              <div className="profile">
              <ArrowDropDownIcon className="icon"/>
              <div className="options">
                <span>Settings</span>
                <span>Logout</span>
              </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar