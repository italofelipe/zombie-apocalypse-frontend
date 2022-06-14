import ReactModal from "react-modal";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { mediaQueries } from "../../styles/mediaQueries";

const ModalInner = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
`;
const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: flex-end;

  svg {
    &:hover {
      cursor: pointer;
    }
  }
`;
const ModalFooter = styled.div`
  width: 100%;
  display: flex;
`;

ReactModal.setAppElement("body");

const StyledModal = styled<any>(ReactModal)`
  position: absolute;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 4px;
  outline: none;
  padding: 20px;
  width: 20vw;
  max-height: 35vh;
  height: 35vh;
  right: 30vw;
  top: 25vh;
  border: 2px solid #81c784;
  background-color: ${colors.orangeOne};
  @media (min-width: ${mediaQueries.xsMin}) and (max-width: ${mediaQueries.xsMax}) {
    right: 2rem;
    width: 80vw;
  }
  @media (min-width: ${mediaQueries.smMin}) and (max-width: ${mediaQueries.smMax}) {
    right: 5.5rem;
  }
`;

export { ModalFooter, ModalHeader, ModalInner, StyledModal };
