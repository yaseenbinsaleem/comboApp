import React from "react";
import NavBar from "./navBar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
     
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signIn">signIn</Link>
            </li>
            <li>
              <Link to="/signUp">signUp</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Home;
