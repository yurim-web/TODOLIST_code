import { Flex, Quote } from "@radix-ui/themes";
import Left from "./components/layout/Left";
import Right from "./components/layout/Right";

function App() {
  return (
    <div
      style={{
        padding: "50px",
        gap: "20px",

        backgroundImage: `url("winter.jpg")`,
        backgroundPosition: "center center",
        backgroundSize: "cover",

        display: "flex",
      }}
      className="App"
    >
      <Left />
      <Right />
    </div>
  );
}

export default App;
