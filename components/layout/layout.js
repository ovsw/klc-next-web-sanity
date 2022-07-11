import { useEffect, useState } from "react";
import { animation, aTagClick, pieChart, scrollTop } from "src/utils";
import Footer from "./footer";
import Header from "./header";
import MobileMenu from "./mobileMenu";
import ScrollTop from "./scrollTop";

const Layout = ({
  children,
  footerStyle,
  noHeaderTop,
  sticky,
  sideBar,
  headerStyle,
  absolute,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    aTagClick();
    window.addEventListener("scroll", scrollTop);
  });
  useEffect(() => {
    animation();
    pieChart("circle_bar");
  }, []);
  return (
    <>
      <MobileMenu
        closeMobileMenu={() => setMobileMenuOpen(false)}
        showMobileMenu={mobileMenuOpen}
      />
      <Header
        openMobileMenu={() => setMobileMenuOpen(true)}
        noHeaderTop={noHeaderTop}
        sticky={sticky}
        sideBar={sideBar}
        headerStyle={headerStyle}
        absolute={absolute}
      />
      {children}
      <Footer footerStyle={footerStyle} />
      <ScrollTop />
    </>
  );
};

export default Layout;
