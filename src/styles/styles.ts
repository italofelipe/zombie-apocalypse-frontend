import styled from "styled-components";
import { colors } from "./colors";
import { mediaQueries } from "./mediaQueries";

const Main = styled.main`
  display: flex;
  flex-flow: row;
  padding: 3rem 15px;
  background: #7b1fa2;

  @media (min-width: ${mediaQueries.xsMin}) and (max-width: ${mediaQueries.mdMin}) {
    width: 100vw;
    height: 100vh;
    padding: 3rem 15px;
    border: 1px solid #ccc;
    display: flex;
    flex-flow: column;
  }

  width: 100vw;
  height: 100vh;
`;

const PageTitle = styled.h1`
  font-size: 1.5rem;
  line-height: 1.5;
  color: ${colors.greenOne};
`;

type IText = {
  color: "green" | "purple" | "orange";
  alignment: "left" | "center" | "right";
  size?: "xs" | "sm" | "md" | "lg";
};

const Text = styled.p<IText>`
  font-size: ${({ size }) => {
    switch (size) {
      case "xs":
        return "0.3rem";
      case "sm":
        return "0.45rem";
      case "md":
        return "0.55rem";
      case "lg":
        return "0.75rem";
      default:
        return "1rem";
    }
  }};
  line-height: 1.4;
  text-align: ${({ alignment }) => alignment};
  color: ${({ color }) =>
    color === "green"
      ? colors.greenOne
      : color === "orange"
      ? colors.orangeOne
      : colors.purpleOne};
`;
const Form = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: auto;
  margin: 10px 0;
  @media (min-width: ${mediaQueries.xsMin}) and (max-width: ${mediaQueries.xsMax}) {
    width: 100%;

    padding: 10px;
  }
  @media (min-width: ${mediaQueries.smMin}) and (max-width: ${mediaQueries.smMax}) {
    width: 90%;
    padding: 1rem 3rem;
  }
  @media (min-width: ${mediaQueries.mdMin}) and (max-width: ${mediaQueries.mdMax}) {
    width: 100%;
    align-items: normal;
  }
  @media (min-width: ${mediaQueries.lgMin}) {
    width: 80%;
    button {
      align-self: flex-start;
      margin: 10px 0;
    }
  }
`;

const ImageContainer = styled.div`
  opacity: 0.4;
  display: flex;
  justify-content: space-between;
  flex-flow: row;
  width: 100%;
`;

const FormContainer = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;

  svg {
    color: ${colors.greenOne};
    &:hover {
      cursor: pointer;
      color: ${colors.redOne};
    }
  }

  @media (min-width: ${mediaQueries.mdMin}) and (max-width: ${mediaQueries.mdMax}) {
    &:nth-child(2) {
      justify-content: space-between;
    }
  }
`;
type IFormInner = {
  size: number;
};
const FormInner = styled.div<IFormInner>`
  width: ${({ size }) => size}%;
  display: flex;
  align-items: center;
  @media (min-width: ${mediaQueries.mdMin}) and (max-width: ${mediaQueries.lgMax}) {
    width: 50%;
    justify-content: center;
    &:nth-child(2) {
      justify-content: start;
    }
    &:first-child {
      justify-content: flex-end;
    }
  }

  @media (min-width: 1376px) {
    width: 50%;
    &:nth-child(2) {
      justify-content: start;
    }
    &:first-child {
      justify-content: flex-end;
    }
  }
`;

const InputLabel = styled.label`
  color: ${colors.orangeOne};
  @media (min-width: ${mediaQueries.xsMin}) and (max-width: ${mediaQueries.xsMax}) {
    font-size: 0.75rem;
    align-self: baseline;
  }
  margin: 0 1rem;
`;
const Input = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid ${colors.greenOne};
  margin: 15px 0;
  padding: 0.5em;
  width: 75%;
  @media (min-width: ${mediaQueries.xsMin}) and (max-width: ${mediaQueries.xsMax}) {
    width: 55vw;
  }
  @media (min-width: ${mediaQueries.smMin}) and (max-width: ${mediaQueries.smMax}) {
    background: none;
    border: none;
    border-bottom: 1px solid #9e9e9e;
    margin: 15px 0;
    padding: 0.5em;
    width: 55vw;
  }
  @media (min-width: ${mediaQueries.xlMin}) {
    width: 15rem;
  }

  &:focus {
    border-bottom: 2px solid ${colors.greenOne};
    border: none;
  }
  &::placeholder {
    font-size: 0.6rem;
    color: white;
  }
`;

const Button = styled.button`
  padding: 1rem 1.5rem;
  background-color: ${colors.greenOne};
  border: none;
  color: ${colors.redOne};
  font-family: "Holtwood One SC", serif;
  &:hover:enabled {
    box-shadow: 1px 2px 17px ${colors.redOne};
    border: 2px solid ${colors.greenOne};
    background: ${colors.purpleOne};
    color: white;
    cursor: pointer;
  }
  &:disabled {
    cursor: default;
    background-color: #bdbdbd;
    box-shadow: none;
    color: white;
  }
`;

const PageInnerContent = styled.section`
  width: 70vw;
  height: auto;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export {
  Button,
  Form,
  FormContainer,
  FormInner,
  Input,
  InputLabel,
  ImageContainer,
  Main,
  PageInnerContent,
  PageTitle,
  Text,
};

