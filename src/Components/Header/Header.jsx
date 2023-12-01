import React, { useState } from "react";
import "../Header/Header.scss";
import { Link, useLocation } from "react-router-dom";
import Auth from "../Auth/Auth";
// import "@fortawesome/fontawesome-free/css/all.css";

function Header(props) {
  const [Authppop,setAuthpop]=useState(false)

  const openAuth=()=>{
    setAuthpop(true)
  }
  const closeAuth=()=>{
    setAuthpop(false)
  }
  let enteredString = ""

  const handleTextChange = (event) => {
      enteredString = event.target.value
      props.searchData(enteredString)
  }
  const location = useLocation();
  return (
    <div id="Header" className="Header">
      <div className="logo">
        <svg
          width="80"
          height="36"
          viewBox="0 0 67 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.6594 12.7266C22.8029 13.2949 23.3033 13.6938 23.8735 13.6938C24.4438 13.6938 24.9736 14.1116 25.0987 14.7025L25.176 15.0638C25.3231 15.7525 24.8117 16.4036 24.1237 16.4036C23.8441 16.4036 23.6381 16.6746 23.7043 16.9493L25.4004 23.8818C25.5181 24.3598 26.059 24.5818 26.4674 24.3222L26.861 24.07C27.0965 23.9195 27.4092 24.0587 27.4607 24.341C27.7955 26.2265 26.0443 27.1561 24.7933 28.1008C22.4092 29.8998 19.0023 28.6465 18.2849 25.7071L16.2871 17.5364C16.1252 16.8703 15.5402 16.4036 14.8669 16.4036C13.5571 16.4036 12.9059 14.774 13.8404 13.8369L19.7087 7.94688C20.3342 7.32213 21.3864 7.62321 21.6035 8.48883L22.6594 12.7266Z"
            fill="#FE384F"
          />
          <path
            d="M28.0384 9.79396C29.5027 8.34499 31.9494 9.0563 32.4461 11.0773L35.6102 23.8885C35.7279 24.3665 36.2687 24.5885 36.6771 24.3251L37.0708 24.0729C37.3063 23.9224 37.619 24.0616 37.6705 24.3439C38.0053 26.2294 36.254 27.159 35.0031 28.1037C32.619 29.9027 29.2121 28.6494 28.4946 25.7101L25.5402 13.614C25.3784 12.9441 25.5734 12.2365 26.059 11.7548L28.0384 9.79396Z"
            fill="#FFC430"
          />
          <path
            d="M42.2842 11.0773C41.7838 9.0563 39.3372 8.34499 37.8765 9.79396L35.8971 11.7548C35.4115 12.2365 35.2165 12.9441 35.3784 13.614L38.3328 25.7063C39.0502 28.6457 42.4571 29.8989 44.8412 28.0999C46.0922 27.1553 47.8435 26.2257 47.5086 24.3401C47.4571 24.0579 47.1444 23.9186 46.9089 24.0692L46.5153 24.3213C46.1069 24.5848 45.566 24.3627 45.4483 23.8847L42.2842 11.0736V11.0773Z"
            fill="#FFC430"
          />
          <path
            d="M52.9501 14.7392C52.6631 17.3436 51.6808 19.82 50.1098 21.8937L48.9361 23.4443C48.5461 23.9562 47.7514 23.783 47.6043 23.1508L45.5881 14.5623C45.0325 12.195 46.5263 9.83527 48.8662 9.38741L49.1164 9.33848C53.2665 8.96965 53.2886 11.6757 52.9501 14.7392Z"
            fill="#17D04B"
          />
        </svg>
      </div>
      <div className="inp">
        <input onChange={handleTextChange} type="text" placeholder="Enter movie title" />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="content">
        <ul>
          <li>
            <Link
              to="/"
              className={`${location.pathname === "/" ? "active" : ""}`}
            >
              <i className={`fa-solid fa-house fa-2xl`}></i>
              <span>Home</span>
            </Link>
          </li>

          <li>
            <Link
              to="#"
              className={` ${location.pathname === "/search" ? "active" : ""}`}
            >
              <i
                style={{ background: "transparent" }}
                className={`fa-solid fa-magnifying-glass fa-2xl`}
              ></i>{" "}
            </Link>
          </li>
          <li>
            <Link
              to="/fav"
              className={`${location.pathname === "/movies" ? "active" : ""}`}
            >
              <i class="fa-solid fa-heart fa-2xl"></i>
              <span>Favourites</span>
            </Link>
          </li>
          <li onClick={openAuth}>
            <Link
              to="#"
              className={`${location.pathname === "/users" ? "active" : ""}`}
              
            >
              <i className={`fa-solid fa-circle-user fa-2xl `}></i>
              <span>Sign in</span>
            </Link>
          </li>
        </ul>
      </div>
    {Authppop&&<Auth closeAuth={closeAuth}/>}
    </div>
  );
}

export default Header;
