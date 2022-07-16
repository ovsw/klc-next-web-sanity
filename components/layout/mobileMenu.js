import Link from "next/link";
import { Fragment, useState } from "react";
import {
  BlogMenu,
  CoursesMenu,
  HomeMenu,
  PageMenu,
  PortfolioMenu,
  JourneyMenu,
} from "./nav-menu";

const MobileMenu = ({ closeMobileMenu, showMobileMenu }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeFun = (name) => setActiveMenu(name === activeMenu ? "" : name);
  const activeLi = (name) =>
    name === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <Fragment>
      <aside
        className={`aside_bar aside_bar_left aside_mobile ${
          showMobileMenu ? "open" : ""
        }`}
      >
        {/* logo */}
        <Link href="/">
          <a className="logo">
            <img src="assets/images/logo.png" alt="logo" />
          </a>
        </Link>
        {/* logo */}
        {/* Menu */}
        <nav>
          <ul className="main-menu">
            <li className="menu-item">
              <a href="/">Home</a>
              {/* <ul className="sub-menu" style={activeLi("Home")}>
                <HomeMenu />
              </ul> */}
            </li>
            <li className="menu-item menu-item-has-children">
              <a href="#" onClick={() => activeFun("Journey")}>
                The Journey
              </a>
              <ul className="sub-menu" style={activeLi("Journey")}>
                <JourneyMenu />
              </ul>
            </li>
            <li className="menu-item ">
              <a href="#" onClick={() => activeFun("Courses")}>
                About Me
              </a>
              {/* <ul className="sub-menu" style={activeLi("Courses")}>
                <CoursesMenu />
              </ul> */}
            </li>
            <li className="menu-item menu-item-has-children">
              <a href="#" onClick={() => activeFun("Blog")}>
                Blog
              </a>
              <ul className="sub-menu" style={activeLi("Blog")}>
                <BlogMenu />
              </ul>
            </li>
            <li className="menu-item ">
              <a href="#" onClick={() => activeFun("Portfolio")}>
                Pricing
              </a>
              {/* <ul className="sub-menu" style={activeLi("Portfolio")}>
                <PortfolioMenu />
              </ul> */}
            </li>
            <li className="menu-item">
              <Link href="/contact">Contacts</Link>
            </li>
          </ul>
        </nav>
        {/* Menu */}
      </aside>
      <div
        className="aside-overlay trigger-left"
        onClick={() => closeMobileMenu()}
      ></div>
    </Fragment>
  );
};

export default MobileMenu;
