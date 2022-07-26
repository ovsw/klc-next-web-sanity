import { DefaultFooter, Footer1, Footer2 } from "./FooterStyle";

const Footer = ({ footerStyle }) => {
  const footerFun_ = () => {
    switch (footerStyle) {
      case 1:
        return <Footer1 />;

      case 2:
        return <Footer2 />;

      default:
        return <DefaultFooter />;
    }
  };

  return <>{footerFun_()}</>;
};

export default Footer;
