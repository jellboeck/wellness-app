/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// import "style.css";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/main.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center">
            <img
              alt="..."
              className="brand n-logo"
              src={require("assets/img/logo1.png")}
            ></img>
            <h1 className="h1-seo">WELLNESS</h1>
            <h3 className="h3-seo">A guide to</h3>
            <h2 className="h2-seo">A Healthier You</h2>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
