import logo from "./logo.svg";
import "./App.css";
import { Octokit } from "@octokit/rest";
import { GetUserRepos } from "./GetUserRepos";
import { GetUserInfo } from "./GetUserInfo";

function App() {
  return (
    <div className="App">
      {/* <GetUserRepos /> */}
      <GetUserInfo />
    </div>
  );
}

export default App;
