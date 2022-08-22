import React  from 'react';
import { Link } from "react-router-dom";
import { GithubUser } from "./GithubUser";

export function ShowGithubUser() {
  return (
    <div>
      <GithubUser name="jbiasella" />
      <Link to="/">Back</Link>
    </div>
  );
}
