import React from "react";

import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import SignIn from "components/SignIn.js";

function Index() {
  // React.useEffect(() => {
  //   document.body.classList.add("index-page");
  //   window.scrollTo(0, 0);
  //   document.body.scrollTop = 0;
  //   return function cleanup() {
  //   };
  // });
  return (
    <>

      <div >
        <IndexHeader />
        <div >
          <SignIn />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
