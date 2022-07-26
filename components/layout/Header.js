import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { stickyNav } from "../utils";
import { DefaultHeadActions, HeadActions } from "./HeadActions";
import HeaderSidebar from "./HeaderSidebar";
import HeaderTop from "./HeaderTop";

import Image from "next/image";
import {
  BlogMenu,
  JourneyMenu,
  CoursesMenu,
  HomeMenu,
  PageMenu,
  PortfolioMenu,
} from "./Nav-menu";
import SearchTrigger from "./SearchTrigger";

const Header = ({
  openMobileMenu,
  noHeaderTop,
  sticky,
  sideBar,
  headerStyle,
  absolute,
}) => {
  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
  });
  const [searchTrigger, setSearchTrigger] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <Fragment>
      <HeaderSidebar
        openSidebar={openSidebar}
        closeSidebar={() => setOpenSidebar(false)}
      />
      <header
        className={`header ${absolute ? "header-absolute1" : ""}  ${
          headerStyle ? `header-${headerStyle}` : "header-3"
        }  ${sticky ? "header-absolute1 can-sticky" : ""}`}
        id="header-sticky"
      >
        {!noHeaderTop && <HeaderTop />}
        <div className="nav_sec">
          <div className="container">
            {/* inner */}
            <div className="nav_warp">
              <nav>
                {/* logo start */}
                <div className="logo">
                  <Link href="/">
                    <a style={{ position: "relative", top: "5px" }}>
                      {/* <img
                        src="/assets/images/logo.png"
                        alt="logo"
                        className="image-fit"
                      /> */}
                      <Image
                        src="/assets/images/logo.png"
                        alt="logo"
                        className="image-fit"
                        width={140}
                        height={35}
                      />
                    </a>
                  </Link>
                </div>
                {/* logo end */}
                {/* Navigation Start */}
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
                  <li className="menu-item menu-item-has-children">
                    <Link href="/the-journey">The Journey</Link>
                    <ul className="sub-menu">
                      <JourneyMenu />
                    </ul>
                  </li>
                  {/* <li className="menu-item ">
                    <a href="#">Services</a>
                  </li> */}
                  <li className="menu-item">
                    <Link href="/pricing">Pricing</Link>
                  </li>
                  {/* <li className="menu-item menu-item-has-children">
                    <a href="#">Courses</a>
                    <ul className="sub-menu">
                      <CoursesMenu />
                    </ul>
                  </li> */}
                  <li className="menu-item menu-item-has-children">
                    <a href="/blog">Blog</a>
                    <ul className="sub-menu">
                      <BlogMenu />
                    </ul>
                  </li>
                  <li className="menu-item">
                    <Link href="/about-me">About Me</Link>
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
                  {/* {!sideBar && (
                    <li className="menu-item search_trigger">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setSearchTrigger(true);
                        }}
                      >
                        <i className="fas fa-search " />
                      </a>
                    </li>
                  )} */}
                </ul>
                {/* Navigation Ends */}
                {/* {!sideBar && (
                  <div className="head_actions">
                    <DefaultHeadActions />
                    <button
                      type="button"
                      className="head_trigger mobile_trigger"
                      onClick={() => openMobileMenu()}
                    >
                      <span />
                      <span />
                      <span />
                    </button>
                  </div>
                )} */}
                {/* Head Actions */}

                {/* Head Actions */}
              </nav>
              {sideBar && (
                <div className="head_actions">
                  {/* <HeadActions setOpenSidebar={setOpenSidebar} /> */}
                  <a
                    className="thm-btn btn-small bg-thm-color-two thm-color-two-shadow btn-rounded mr-4 mb-2 wow fadeInRight"
                    data-wow-delay=".50ms"
                  >
                    Schedule Free Call{" "}
                    <i className="fal fa-chevron-right ml-2" />
                  </a>
                  <button
                    type="button"
                    className="head_trigger mobile_trigger"
                    onClick={() => openMobileMenu()}
                  >
                    <span />
                    <span />
                    <span />
                  </button>
                </div>
              )}
            </div>
            {/* inner */}
          </div>
        </div>
        {/* Search Start */}
        {!sideBar && (
          <SearchTrigger
            searchTrigger={searchTrigger}
            setSearchTrigger={() => setSearchTrigger(false)}
          />
        )}
        {/* Search End */}
      </header>
    </Fragment>
  );
};

export default Header;
