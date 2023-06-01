import Alert from "./components/Alert";
import Button from "./components/Button";
// import ListGroup from "./components/ListGroup";
// import Notes from "./Notes";

function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // const handleSelectItem = (q: string) => {
  //   console.log(q);
  // };

  const handleButtonClick = () => {
    console.log("button clicked!");
  };

  return (
    <div>
      {/* <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      /> */}
      <Alert>
        Hello World!
        {/* Children */}
      </Alert>
      {/* <Notes /> */}
      <Button colour={"info"} onClick={handleButtonClick}>
        Click Me
      </Button>
    </div>
  );
}

export default App;
