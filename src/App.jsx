import { Flex, Quote } from "@radix-ui/themes";
import Left from "./components/layout/Left";
import Right from "./components/layout/Right";
import "./css/responsive.css";
import "./css/reset.css";

function App() {
  return (
    <div 
      className="app_container"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/winter.jpg)`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Left />
      <Right />
    </div>
  );
}

export default App;
