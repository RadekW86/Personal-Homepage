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
import { fetchRepos, selectreposStatus, selectRepos } from "../reposSlice";
import { repoIgnore } from "../routes";

export const Portfolio = () => {
  const dispatch = useDispatch();
  const portfolioState = useSelector(selectreposStatus);
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
            {repos
              .filter((entry) => !repoIgnore.includes(entry.name))
              .map((repo) => (
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
