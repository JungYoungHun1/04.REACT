import "./App.css";
import Home from "./Home";
import Projects from "./Projects";
import Project from "./Project";
import { Link, Outlet, NavLink } from "react-router-dom";

// function App({ children }) {
function App({}) {
  // function activeStyle({ isActive }) {
  //   return {
  //     textDecoration: isActive ? "underline" : undefined,
  //     fontSize: isActive ? "24px" : undefined,
  //   };
  // }
  return (
    <div>
      <div>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/" style={activeStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul> */}
        <header className="App-header">POST</header>

        {/* <input type="text"></input> */}
      </div>
      {/* <div>{children}</div> */}
      <div>
        <Outlet></Outlet>
      </div>
      <footer className="App-footer">정영훈</footer>
    </div>
  );
}

export default App;
