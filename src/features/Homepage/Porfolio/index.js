import { useDispatch, useSelector } from "react-redux";
import { Error } from "./states/Error";
import { Loading } from "./states/Loading";
import {
  StyledGitContent,
  StyledGitHeader,
  StyledGitLogo,
  StyledHeaderSubTitle,
  StyledHeaderText,
  StyledHeaderTitle,
  StyledPortfolio,
} from "./styled";
import { selectThemeMode } from "../homepageSlice";
import { ProjectTile } from "./ProjectTile";
import { useEffect } from "react";
import { fetchRepos, selectReposState, selectRepos } from "../reposSlice";

export const Portfolio = () => {
  const dispatch = useDispatch();
  const portfolioState = useSelector(selectReposState);
  const repos = useSelector(selectRepos);
  const mode = useSelector(selectThemeMode);

  useEffect(() => {
    dispatch(fetchRepos());
  }, []);

  const content = () => {
    switch (portfolioState) {
      case "loading":
        return <Loading />;

      case "error":
        return <Error />;

      case "success":
        return (
          <>
            {repos.map((repo) => (
              <ProjectTile
                key={repo.id}
                title={repo.name}
                description={repo.description}
                demo={repo.homepage}
                code={repo.html_url}
              ></ProjectTile>
            ))}
          </>
        );
    }
  };

  return (
    <StyledPortfolio>
      <StyledGitHeader>
        <StyledGitLogo mode={mode} />
        <StyledHeaderText mode={mode}>
          <StyledHeaderTitle>Portfolio</StyledHeaderTitle>
          <StyledHeaderSubTitle>My recent projects</StyledHeaderSubTitle>
        </StyledHeaderText>
      </StyledGitHeader>
      <StyledGitContent list={portfolioState === "success" ? "list" : ""}>
        {content()}
      </StyledGitContent>
    </StyledPortfolio>
  );
};
