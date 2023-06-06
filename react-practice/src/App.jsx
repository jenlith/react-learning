import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Menu from "./components/Menu";
import Test from "./components/Test";

function App() {
  return NewApp();
}

function NewApp() {
  const [open, setOpen] = useState(true);
  const quickClose = () => setOpen(false);
  let menuItems = ["Home", "About", "Info"];
  return (
    <>
      <Menu text="World" items={menuItems}>
        How Are You?
      </Menu>
      <Test
        title="test"
        description="welcome"
        acceptText="acceptance"
        cancelText="cancellation"
        acceptHandler={quickClose}
        cancelHandler={quickClose}
        closeHandler={quickClose}
      />
    </>
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
