import styled from "styled-components";
import { colors } from "../../styles/colors";
import { mediaQueries } from "../../styles/mediaQueries";

const Aside = styled.aside`
  width: 40vw;
  height: auto;
  display: flex;
  flex-flow: column;
  align-items: baseline;
  overflow: auto;
  @media (min-width: ${mediaQueries.xsMin}) and (max-width: ${mediaQueries.mdMin}) {
    width: 100%;
    max-height: 20vh;
  }

  > p {
    @media (min-width: ${mediaQueries.lgMin}) {
      max-width: 76%;
    }
  }
`;

const SurvivorsItem = styled.div`
  margin: 10px 0;
  p {
    &:hover {
      cursor: pointer;
      text-shadow: 0px 0px 15px ${colors.redOne};
    }
  }
`;
const SwitchContainer = styled.div`
  display: flex;
  flex-flow: row;
  width: 70%;
  align-items: center;
  justify-content: flex-start;
  margin-left: 0.5rem;
  label {
    margin-right: 2vw;
  }

  @media (min-width: ${mediaQueries.xsMin}) and (max-width: ${mediaQueries.mdMin}) {
    width: 76vw;
    margin-left: 3.5vw;
  }
`;

export { Aside, SurvivorsItem, SwitchContainer };

