import { useState } from "react";

import Navbar from "./components/Navbar";
import Head from "./components/Head";
import Body from "./components/Body";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Head />
      <Body />
    </>
  );
}

export default App;
