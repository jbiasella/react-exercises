import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Welcome } from "./Welcome";
import { ShowGithubUser } from "./ShowGithubUser";

export function App() {
  return (
    <div>
    <h1>My awesome app!</h1>
    <Link to="/">Home</Link>
    <Link to="/users/:username">githubUser</Link>
  <Routes>
    <Route path="/" element={<Welcome name="Jbiasella"/>} />
    <Route path="users/:username" element={<ShowGithubUser />} />
  </Routes>
</div>  );
}

export default App;