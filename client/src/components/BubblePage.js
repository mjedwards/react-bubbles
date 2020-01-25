import React from "react";
// import axios from "axios";
// import { BubbleContext } from "./context/bubbleContext";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  // const { bubbleState } = useContext(BubbleContext);
  // console.log(bubbleState.colors);
  // const [colorList, setColorList] = useState(bubbleState.colors);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  return (
    <>
      {/* <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} /> */}
      <ColorList />
      <Bubbles />
    </>
  );
};

export default BubblePage;
