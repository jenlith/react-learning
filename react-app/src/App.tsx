import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
// import ListGroup from "./components/ListGroup";
// import Notes from "./Notes";

function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // const handleSelectItem = (q: string) => {
  //   console.log(q);
  // };

  /*const handleButtonClick = () => {
    console.log("button clicked!");
  };*/

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {/* <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      /> */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(!alertVisible)}>
          Hello World!{/* Children */}
        </Alert>
      )}
      <Button
        colour={"info"}
        onClick={() => {
          setAlertVisibility(!alertVisible);
        }}
      >
        Click Me
      </Button>
    </div>
  );
}

export default App;
