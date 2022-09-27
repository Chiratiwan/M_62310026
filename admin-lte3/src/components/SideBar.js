import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="flex">
      <aside className="main-sidebar sidebar-white-primary elevation-4">
        <a href="./Home" className="brand-link">
          <span className="brand-text font-weight-black">Myport</span>
        </a>
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="https://scontent.fbkk14-1.fna.fbcdn.net/v/t39.30808-6/304860005_1221870938392803_9095178298599390061_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG9o1dZOZXp_2gZT_d5l1FxSs_IvCzDjxBKz8i8LMOPEFhlcCG25SxdeEGvDFy8P115-28wqEQxEhIqPVrd8A9G&_nc_ohc=SjPH5uUj40kAX--2GyS&_nc_ht=scontent.fbkk14-1.fna&oh=00_AT-yEnF7husPuAJtzBw2Q4oe0TzKw9l3Cjn_okj14w_uUw&oe=63234163"
                classname="img-square elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="./Home" className="d-block">
                CHIRATIWAN <br /> YODKORNBURI{" "}
              </a>
            </div>
          </div>
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item menu-open">
                <ul className="nav nav-wrapper">
                  <li className="nav-item">
                    <a href="./Home" className="nav-link ">
                      <i className="far fa-star nav-icon" />
                      <p>Home</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="./Aboutme" className="nav-link">
                      <i className="far fa-star nav-icon" />
                      <p>About me</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="./Portfolio" className="nav-link">
                      <i className="far fa-star nav-icon" />
                      <p>Portfolio</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
}
