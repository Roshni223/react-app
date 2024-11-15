import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  const colours=[
    { name: "dark", value: "#000000" },
    { name: "green", value: "#06402B" },
    { name: "blue", value: "#000435" },
    { name: "white", value: "#ffffff" }
  ]
  const handleChange=(event)=>{
    const color = event.target.value;
    props.toggleMode(color);
  }
  return (
    // <nav className = "navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor:props.mode}}>
    <nav className = "navbar navbar-expand-lg" style={{ backgroundColor: props.mode, color: props.mode === "#ffffff" ? "black" : "white" }}>

      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={{ color: props.mode === "#ffffff" ? "black" : "white" }}>
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ color: props.mode === "#ffffff" ? "black" : "white" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ color: props.mode === "#ffffff" ? "black" : "white" }}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ color: props.mode === "#ffffff" ? "black" : "white" }}>
        
            <li className="nav-item" style={{ color: props.mode === "#ffffff" ? "black" : "white" }}>
              <Link className="nav-link active" aria-current="page" to="/" style={{ color: props.mode === "#ffffff" ? "black" : "white" }}>
                Home
              </Link>
            </li>
            <li className="nav-item" style={{ color: props.mode === "#ffffff" ? "black" : "white" }}>
              <Link className="nav-link" to="/about" style={{ color: props.mode === "#ffffff" ? "black" : "white" }}>
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: props.mode === "#ffffff" ? "black" : "white" }}
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true" style={{ color: props.mode === "#ffffff" ? "black" : "white" }}>
                Disabled
              </a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form> */}
          {/* <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==="light"?"dark":"light"} mode</label>
</div> */}
<select value={props.mode} onChange={handleChange}>
        <option value="">-- Choose a color --</option>
        {colours.map((color) => (
          <option key={color.value} value={color.value}>
            {color.name}
          </option>
        ))}
      </select>
        </div>
      </div>
    </nav>
  );
}
