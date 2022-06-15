import styled from "styled-components";
import { colors } from "../../styles/colors";

const InfectedSurvivorLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 3rem;
  height: 1rem;
  margin: 0 2vw;
`;
const InfectedSurvivorSwitch = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: ${colors.greenOne};
  }
  &:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  &:focus + span {
    box-shadow: 0 0 1px ${colors.greenOne};
  }
`;
const InfectedSurvivorSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.greenOne};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 0.8rem;
    width: 1.2rem;
    left: 0rem;
    bottom: 2px;

    background-color: ${colors.orangeOne};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }
`;
export {
  InfectedSurvivorLabel,
  InfectedSurvivorSwitch,
  InfectedSurvivorSlider,
};
