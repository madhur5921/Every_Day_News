import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <>
        <div className="fixed-top">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                Every-Day-News
              </Link>
              <button
                className="navbar-toggler"
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
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Business">
                      Business News
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Entertainment">
                      Entertainment News
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Health">
                      Health News
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Science">
                      Science News
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Sports">
                      Sports News
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Technology">
                      Technology News
                    </Link>
                  </li>
                </ul>
              </div>

              {/* <div className={`form-check form-switch text-${this.props.mode === 'light'? 'dark' : 'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick = {this.props.dark_light_mode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{this.props.mode === 'light'? 'Dark Mode' : 'Light Mode'}</label>
</div> */}

            </div>
          </nav>
        </div>
      </>
    );
  }
}
