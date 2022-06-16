import styled from "styled-components";
import { colors } from "../../styles/colors";
import { mediaQueries } from "../../styles/mediaQueries";

const SurvivorContainer = styled.section`
  width: 80%;
  height: 100vh;
  display: flex;
`;

const SurvivorCard = styled.div`
  display: flex;
  flex-flow: column;
  width: 45%;
  border: 1px solid ${colors.purpleTwo};
  padding: 1rem;
  border-radius: 8px;
  max-height: 80vh;
  > p {
    margin: 2rem 0;
  }
  @media (min-width: ${mediaQueries.xsMin}) and (max-width: ${mediaQueries.mdMin}) {
    width: 100%;
    margin-top: 3rem;
    img {
      max-width: 50vw;
      max-height: 50vh;
    }
  }
`;

const SurvivorStats = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const Checkbox = styled.input`
  width: 50px;
  height: 50px;
  accent-color: ${colors.greenOne};
`;
const CardLower = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2rem;
  flex-flow: row;
  justify-content: space-between;
`;

const SkillsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2rem;
  flex-flow: column;
  @media (min-width: ${mediaQueries.xsMin}) and (max-width: ${mediaQueries.mdMin}) {
  }
`;
export {
  CardLower,
  Checkbox,
  SkillsContainer,
  SurvivorCard,
  SurvivorContainer,
  SurvivorStats,
};

