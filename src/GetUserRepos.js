import logo from "./logo.svg";
import "./App.css";
import { Octokit } from "@octokit/rest";

export const GetUserRepos = () => {
  const getUserRepos = async (username) => {
    const octokit = new Octokit();

    return await octokit.repos
      .listForUser({
        username,
      })
      .then(({ data }) => {
        const repos = data.map((repo) => repo.name);
        return repos;
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  getUserRepos("cloudcodermy").then((repos) => {
    console.log("GetUserRepos", repos);
  });

  return <div></div>;
};
