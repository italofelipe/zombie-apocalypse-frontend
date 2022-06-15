import styled from "styled-components";
import { colors } from "../../styles/colors";
import { mediaQueries } from "../../styles/mediaQueries";

const Aside = styled.aside`
  width: 40vw;
  height: auto;
  display: flex;
  flex-flow: column;
  align-items: baseline;
  @media (min-width: ${mediaQueries.xsMin}) and (max-width: ${mediaQueries.mdMin}) {
    width: 100%;
    overflow: auto;
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
  width: 27vw;
  align-items: center;
  justify-content: flex-end;
  label {
    margin-right: 2vw;
  }

  @media (min-width: ${mediaQueries.xsMin}) and (max-width: ${mediaQueries.mdMin}) {
    width: 76vw;
  }
`;

export { Aside, SurvivorsItem, SwitchContainer };

