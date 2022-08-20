import React, from "react";
import { Welcome } from "./Welcome";
import {Routes, Route} from 'react-router-dom';


export function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path ="/" element = {<Welcome name ="JONATHAN"/>}></Route>
        </Routes>
      </div>
    </>
  );
}
