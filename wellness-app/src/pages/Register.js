// import React from "react";

// // reactstrap components
// import {
//   Button,
//   Card,
//   CardBody,
//   CardFooter,
//   Form,
//   Input,
//   InputGroupAddon,
//   InputGroupText,
//   InputGroup,
//   Container,
//   Col
// } from "reactstrap";

// // core components
// import SignUpHeader from "components/Headers/SignUpHeader.js";
// import TransparentFooter from "components/Footers/TransparentFooter.js";

// function SignUpPage() {
//   const [firstFocus, setEmailFocus] = React.useState(false);
//   const [lastFocus, setPasswordFocus] = React.useState(false);
//   React.useEffect(() => {
//     document.body.classList.add("login-page");
//     window.scrollTo(0, 0);
//     document.body.scrollTop = 0;
//     return function cleanup() {
//       document.body.classList.remove("login-page");
//     };
//   });
//   return (
//     <>
//       {/* <ExamplesNavbar /> */}
//       <div className="page-header">
//         <div
//           className="page-header-image"
//           style={{
//             backgroundImage: "url(" + require("assets/img/login.jpg") + ")"
//           }}
//         ></div>
//         <div className="content">


          
//           <Container>
//             <Col className="ml-auto mr-auto" md="4">
//               <Card className="card-login card-plain">
//                 <Form action="" className="form" method="">



//         <SignUpHeader />

//                   <CardBody>

//                     <InputGroup
//                       className={
//                         "no-border input-lg" +
//                         (firstFocus ? " input-group-focus" : "")
//                       }
//                     >
//                       <InputGroupAddon addonType="prepend">
//                         <InputGroupText>
//                           <i className="now-ui-icons ui-1_email-85"></i>
//                         </InputGroupText>
//                       </InputGroupAddon>
//                       <Input
//                         placeholder="Email..."
//                         type="text"
//                         onFocus={() => setEmailFocus(true)}
//                         onBlur={() => setEmailFocus(false)}
//                       ></Input>
//                     </InputGroup>
//                     <InputGroup
//                       className={
//                         "no-border input-lg" +
//                         (lastFocus ? " input-group-focus" : "")
//                       }
//                     >

//                       <InputGroupAddon addonType="prepend">
//                         <InputGroupText>
//                           <i className="now-ui-icons objects_key-25"></i>
//                         </InputGroupText>
//                       </InputGroupAddon>
//                       <Input
//                         placeholder="Password..."
//                         type="password"
//                         onFocus={() => setPasswordFocus(true)}
//                         onBlur={() => setPasswordFocus(false)}
//                       ></Input>
//                     </InputGroup>
//                   </CardBody>

//                   <CardFooter className="text-center">
//                     <Button
//                     className="btn-neutral btn-round"
//                     color="info"
//                     href="#pablo"
//                     onClick={e => e.preventDefault()}
//                     size="lg"
//                   >
//                   Get Started
//                   </Button>
//                   </CardFooter>

//                 </Form>
//               </Card>
//             </Col>
//           </Container>
//         </div>
//         <TransparentFooter />
//       </div>
//     </>
//   );
// }

// export default SignUpPage;






import React from "react";

// import IndexNavbar from "components/Navbars/IndexNavbar.js";
// import IndexHeader from "components/Headers/IndexHeader.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";
import SignUp from "components/SignUp.js";

function SignUpPage() {
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
  return (
    <>
<SignUp />
<TransparentFooter />
{/* <div className="page-header">
         <div
          className="page-header-image"
          style={{
            // backgroundImage: "url(" + require("assets/img/login.jpg") + ")"
          }}
        ></div>



      <div className="wrapper">

        <div className="main">

          <SignUp />

        </div>
        <TransparentFooter />
      </div>
      </div> */}
    </>
  );
}



















export default SignUpPage;