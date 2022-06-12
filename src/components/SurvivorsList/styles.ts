import styled from "styled-components";
import { mediaQueries } from "../../styles/mediaQueries";

const Aside = styled.aside`
  width: 40vw;
  height: 100vw;
  display: flex;
  flex-flow: column;
  align-items: baseline;
  @media (min-width: ${mediaQueries.xsMin}) and (max-width: ${mediaQueries.mdMin}) {
    width: 100%;
  }
`;

const SurvivorsItem = styled.div`
  margin: 10px 0;
`

export {
  Aside,
  SurvivorsItem
};

