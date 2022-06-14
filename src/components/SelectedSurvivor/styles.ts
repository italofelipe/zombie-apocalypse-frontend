import styled from "styled-components";
import { colors } from "../../styles/colors";

const SurvivorContainer = styled.section`
  width: 80%;
  height: 100vh;
  display: flex;
`;

const SurvivorCard = styled.div`
  display: flex;
  flex-flow: column;
  width: 40%;
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

export { Checkbox, SurvivorCard, SurvivorContainer, SurvivorStats };
