import React from "react";

// import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import SignIn from "components/SignIn.js";

function Index(props) {
  console.log('Index');
  console.log(props);
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  // props.getUser();
  return (
    <>
      {/* <IndexNavbar /> */}
      <div className="wrapper">
        <IndexHeader />
        <div className="main">

          <SignIn />

        </div>
      </div>
      <DarkFooter />
    </>
  );
}

export default Index;
