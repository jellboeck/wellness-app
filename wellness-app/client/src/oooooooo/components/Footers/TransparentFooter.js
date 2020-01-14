/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        <nav>
          <ul>
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
            </li>
            <li>
            <a
                href="https://www.google.com"
                target="_blank"
              >
                BLA BLA BLA
              </a>
            </li>
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

export default TransparentFooter;
