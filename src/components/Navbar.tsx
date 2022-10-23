import { FunctionComponent, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getBiz, getToken, removeToken } from "../services/userService";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  const navigate = useNavigate();

  const logout = () => {
    removeToken();
    navigate("/");
  };

  return (
    <>
      <div>
        <NavLink className="" to="/home">
          <img
            style={{ width: "9rem" }}
            className="  mt-0"
            src="https://i.fbcd.co/products/original/b9425668f085f93c4655202b0444bd89b4c0ddff773d905b065775e551903772.jpg"
            alt=""
          />
        </NavLink>
      </div>
      <div className="div-div row " style={{ height: "25rem" }}>
        <div></div>
        <div></div>
        <nav className="navbar navbar-expand-lg navbar-dark  fs-4  ">
          <div className="container-fluid">
            <button
              className="navbar-toggler mx-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse  mb-0 pt-5 "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li>
                  <div className="px-5">
                    <button
                      onClick={() => logout()}
                      className="btn text-light  border fs-4"
                    >
                      <i className="fa-solid fa-right-from-bracket"></i> Logout
                    </button>
                  </div>
                </li>
                <li className="nav-item ">
                  <NavLink
                    className="nav-link px-2 "
                    aria-current="page"
                    to="/home"
                  >
                    About
                  </NavLink>
                </li>
                {!getToken() ? (
                  <li className="nav-item">
                    <NavLink
                      className="nav-link px-2"
                      aria-current="page"
                      to="/login"
                    >
                      Sign in
                    </NavLink>
                  </li>
                ) : null}

                {!getToken() ? (
                  <li className="nav-item px-2">
                    <NavLink className="nav-link" to="/register">
                      Sign up
                    </NavLink>
                  </li>
                ) : null}

                {getToken() ? (
                  <li className="nav-item px-2">
                    <NavLink className="nav-link" to="/cards">
                      All Cards
                    </NavLink>
                  </li>
                ) : null}

                {getBiz() ? (
                  <li className="nav-item px-2">
                    <NavLink className="nav-link" to="/mycards">
                      My Cards
                    </NavLink>
                  </li>
                ) : null}

                {getBiz() ? (
                  <li className="nav-item px-2">
                    <NavLink className="nav-link" to="/newcard">
                      New Card
                    </NavLink>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
function jwt_decode(arg0: string): any {
  throw new Error("Function not implemented.");
}
