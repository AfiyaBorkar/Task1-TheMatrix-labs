import React,{useEffect,useState} from "react";
import "./Sidebar.css"; // Import your CSS file
import icnnet from "./icnnet.png";
import Footer from "./Footer";
import {Link } from "react-router-dom";


const Sidebar = () => {
  
  const [address,setAddress] = useState("");
  useEffect(() => {
    const url = window.location.href; // Get the current page's URL
  const parts = url.split('/');
  const address = parts[parts.length - 1];
  
  console.log(address);
  setAddress(address)
  
   
  }, [])
  
  return (
    <>
    <div className="p-side-navigation--dark" id="drawer">
      <div
        className="p-side-navigation__overlay js-drawer-toggle"
        aria-controls="drawer"
      ></div>

      <header className="p-side-navigation__header">
        <h1 className="p-side-navigation__header-text">
         
          <img
            src={icnnet}
            alt=""
            style={{
              width: "25.33333396911621px",
              height: "29.33333396911621px",
              top: "29px",
              left: "35px",
            }}
          />{" "}
          nFTify
        </h1>
      </header>

      <ul className="p-side-navigation__list">
        <li className="p-side-navigation__item token-address">
         {address=="tokenaddress"? (<Link
            className="p-side-navigation__link  token-address-content"
            style={{ color: "#F7F9F9",background: "#F30050" }}
            to="/tokenaddress"
          >
            Token Address
          </Link>) : (<Link
          className="p-side-navigation__link  token-address-content"
          style={{ color: "#F7F9F9" }}
          to="/tokenaddress"
        >
          Token Address
        </Link>)}
          
        </li>
        <li className="p-side-navigation__item">
        {address=="pairaddress"? (<Link
            className="p-side-navigation__link pair-address"
            style={{ color: "#F7F9F9",background: "#F30050" }}
            to="/pairaddress"
          >
            Pair Address
          </Link>) : (<Link
            className="p-side-navigation__link pair-address"
            style={{ color: "#F7F9F9" }}
            to="/pairaddress"
          >
            Pair Address
          </Link>)}

          
        </li>
      </ul>

      <div className="p-side-navigation__social-icons">
          <a className="p-side-navigation__social-icon" href="#">
          <i class="p-icon--facebook"></i>

          </a>
          <a className="p-side-navigation__social-icon" href="#">
          <i class="p-icon--linkedin"></i>
          </a>
          <a className="p-side-navigation__social-icon" href="#">
          <i class="p-icon--twitter"></i>

          </a>
        </div>
        <Footer/>
    
    </div>

      </>
  );
};

export default Sidebar;
