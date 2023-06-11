import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import "./custom.css";
import Button from "./components/Button";
import Nav from "./components/Nav";
import NavElement from "./components/NavElement";
import Welcome from "./components/Welcome";
import Home from "./components/Home";

function App() {
  let defaultLink = "http://localhost:5173/";

  const navItems = ["Welcome", "Home", "About", "Info"];
  const subNavItems = { Welcome: ["1"], Home: ["A", "B", "C"] };
  const showSubItems = (parent) => {
    return (
      <>
        {subNavItems[parent] &&
          subNavItems[parent].map((sub) => {
            return (
              <NavElement key={sub} label={sub} link={defaultLink}></NavElement>
            );
          })}
      </>
    );
  };

  // select a view for the body of the page
  const [currView, setView] = useState("Welcome");
  const showView = () => {
    switch (currView) {
      case "Welcome":
        return <Welcome />;
      case "Home":
        return <Home />;
      default:
        return <h1>No page found</h1>;
    }
  };

  const [menuVisible, setMenuVisibility] = useState(true);
  const closeMenu = () => setMenuVisibility(false);
  const openMenu = () => setMenuVisibility(true);

  const fullMenu = () => {
    return (
      <>
        <Nav title="Navigation" isVertical={true} closeHandler={closeMenu}>
          {/* <NavElement label="About" isCurr={true} link={defaultLink}> */}
          {navItems.map((item) => {
            return (
              <NavElement
                key={item}
                label={item}
                isCurr={item === currView}
                link={defaultLink}
                onClick={() => setView(item)}
              >
                {item === currView ? showSubItems(item) : null}
              </NavElement>
            );
          })}
        </Nav>
      </>
    );
  };

  // The actual app appearance
  return (
    <div className="horizontal">
      {menuVisible ? (
        fullMenu()
      ) : (
        <div className="menu">
          <Button label="View Navigation" clickHandler={openMenu} />
        </div>
      )}
      <div className="page_component vertical">{showView()}</div>
    </div>
  );
}

function OldApp() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
