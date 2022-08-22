import { Link } from "react-router-dom";
import { GithubUser } from "./GithubUser";

export function ShowGithubUser() {
  return (
    <div>
      <GithubUser name="jbiasela" />
      <Link to="/">Back</Link>
    </div>
  );
}
