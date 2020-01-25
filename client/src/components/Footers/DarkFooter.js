/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            {/* <li>
              <a
                href="https://www.google.com"
                target="_blank"
              >
                BLA BLA BLA
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com"
                target="_blank"
              >
                BLA BLA BLA
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com"
                target="_blank"
              >
                BLA BLA BLA
              </a>
            </li> */}
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a
          >
            The Cool Group
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;