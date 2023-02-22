

import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import Greeting from "./pages/Greeting";

const App = () => {

  return <>
    <h1>Hello World!</h1>
    <h2>I like you</h2>
    <Link to="/greeting">Go to greeting page</Link>
    <Routes>
      <Route path="/greeting" element={<Greeting/>}/>
    </Routes>
  </>
}

export default App;