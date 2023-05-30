import { Container } from "../../common/Container/styled";
import { Main } from "./Main/styled";
import { Switch } from "./Switch";
import { TopSection } from "./TopSection";

export const Homepage = () => {
  return (
    <Container>
      <Switch />
      <TopSection />
      <Main />
    </Container>
  );
};
