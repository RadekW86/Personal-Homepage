import { Container } from "../../common/Container/styled";
import { Main } from "./Main/styled";
import { Section } from "./Section";
import { Switch } from "./Switch";
import { TopSection } from "./TopSection";
import tools from "../../images/tools.svg";
import skillset from "../Homepage/skillset.json";
import rocket from "../../images/rocket.svg";
import toLearn from "../Homepage/toLearn.json";
import { BottomSection } from "./BottomSection";
import { Portfolio } from "./Porfolio";

export const Homepage = () => {
  return (
    <Container>
      <Switch />
      <TopSection />
      <Main>
        <Section
          title={"My skillset includes"}
          emoji={tools}
          content={skillset.skillset}
        />
        <Section
          title={"What I want to learn next"}
          emoji={rocket}
          content={toLearn.toLearn}
        />
        <Portfolio />
        <BottomSection />
      </Main>
    </Container>
  );
};
