import { repositories } from "./routes";

export const getRepoInfo = async () => {
  const response = await fetch(repositories);

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};
