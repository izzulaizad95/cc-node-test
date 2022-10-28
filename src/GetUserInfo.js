import logo from "./logo.svg";
import "./App.css";
import { Octokit } from "@octokit/rest";

export const GetUserInfo = () => {
  const getUserInfo = async (username) => {
    const octokit = new Octokit();

    let userInfo = {};

    await octokit.users
      .getByUsername({
        username,
      })
      .then(({ data }) => {
        userInfo = { ...userInfo, name: data.name };
      })
      .then(() => {
        return octokit.repos.listForUser({
          username,
        });
      })
      .then(({ data }) => {
        userInfo = { ...userInfo, repos: data.map((repo) => repo.name) };
        console.log("userInfo", userInfo);
      })
      .catch((error) => {
        console.log("error", error);
      });

    let userInfo2 = {};
    const user = await octokit.users.getByUsername({
      username,
    });
    userInfo2 = { ...userInfo2, name: await user.name };

    const userRepos = await octokit.repos.listForUser({
      username,
    });
    userInfo2 = {
      ...userInfo2,
      repos: await userRepos.map((repo) => repo.name),
    };

    return userInfo2;
    // return userInfo;
  };

  getUserInfo("cloudcodermy").then((result) => {
    console.log("GetUserInfo", result);
  });

  return <div></div>;
};
