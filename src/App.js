// import logo from './logo.svg';

import AnimatedCursor from "react-animated-cursor";
import "./App.css";
import Navbar from "./components/NavBar";
import NewForm from "./components/NewForm";


const App = () => {


  return (
    <>
      <AnimatedCursor
        innerSize={20}
        outerSize={30}
        color="12,0,6"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          "label[for]",
          "select",
          "button",
          ".link",
        ]}
      />
      <Navbar title="Text Utils" />
      
      <div className="container my-3">
        {/* <AlertBox alert= "alert"/> */}
        <NewForm heading="Enter Alphabets here:" />
        
      </div>
    </>
  );
};

export default App;
