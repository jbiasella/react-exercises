import React from "react";
import { Counter } from "./Counter"
import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome name="Jonathan"/>} />
        <Route path="/counter" element={<Counter/>} />
      </Routes>
    </div>
  );
}

export default App;