import React from "react";
import proptype from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <a className="navbar-brand mx-3" href="#">
          TextUtils
        </a>
        
        
            <div className="form-check form-switch mx-2 mx-s-0">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />

              <label
                className={`form-check-label  text-${
                  props.mode === "light" ? "dark" : "light"
                } `}
                htmlFor="flexSwitchCheckDefault"
              >
                Enable {props.mode === "light" ? "dark" : "light"} mode
              </label>
            </div>
            <div className="form-check form-switch mx-s-0 ">
              <input
                className="form-check-input"
                type="checkbox"
                onClick={props.toggleredmode}
                id="flexSwitchCheckDefault"
              />
              <label
                className={`form-check-label mx-1 text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                Red dark mode
              </label>
            </div>
          
      </nav>
    </>
  );
}

Navbar.proptype = { title: proptype.string.isrequired };

Navbar.defaultProps = { title: "set title" };
