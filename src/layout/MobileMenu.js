import Link from "next/dist/client/link";
import { Fragment, useState } from "react";
import {
  BlogMenu,
  CoursesMenu,
  HomeMenu,
  PageMenu,
  PortfolioMenu,
} from "./Menu";

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
            <img src="/assets/images/logo.png" alt="logo" />
          </a>
        </Link>
        {/* logo */}
        {/* Menu */}
        <nav>
          <ul className="main-menu">
            <li className="menu-item">
              <Link href="/">Home</Link>
            </li>
            {/* <li className="menu-item menu-item-has-children">
                    <a href="#">Home</a>
                    <ul className="sub-menu">
                      <HomeMenu />
                    </ul>
                  </li> */}
            <li className="menu-item">
              <Link href="/">My Process</Link>
            </li>
            <li className="menu-item menu-item-has-children">
              <a href="#">Services</a>
              <ul className="sub-menu">
                <PageMenu />
              </ul>
            </li>
            <li className="menu-item">
              <Link href="/">Pricing</Link>
            </li>
            {/* <li className="menu-item menu-item-has-children">
                    <a href="#">Courses</a>
                    <ul className="sub-menu">
                      <CoursesMenu />
                    </ul>
                  </li> */}
            <li className="menu-item menu-item-has-children">
              <a href="#">Blog</a>
              <ul className="sub-menu">
                <BlogMenu />
              </ul>
            </li>
            <li className="menu-item">
              <Link href="/">About Me</Link>
            </li>
            {/* <li className="menu-item menu-item-has-children">
                    <a href="#">Portfolio</a>
                    <ul className="sub-menu">
                      <PortfolioMenu />
                    </ul>
                  </li> */}
            <li className="menu-item">
              <Link href="/contact">Contact</Link>
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
