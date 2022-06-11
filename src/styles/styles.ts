import styled from "styled-components";
import { colors } from "./colors";
import { mediaQueries } from "./mediaQueries";

const Main = styled.main`
  display: flex;
  flex-flow: row;
  padding: 3rem 15px;
  background: #9575cd;

  @media (min-width: ${mediaQueries.xsMin}) and (max-width: ${mediaQueries.mdMin}) {
    width: 100vw;
    height: 100vh;
    padding: 3rem 15px;
    border: 1px solid #ccc;
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
};

const Text = styled.p<IText>`
  font-size: 1rem;
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
  border: 1px solid #ccc;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: auto;
  @media (min-width: ${mediaQueries.xsMin}) and (max-width: ${mediaQueries.xsMax}) {
    width: 100%;

    padding: 10px;
  }
  @media (min-width: ${mediaQueries.smMin}) and (max-width: ${mediaQueries.smMax}) {
    width: 90%;
    padding: 1rem 3rem;
  }
  @media (min-width: ${mediaQueries.mdMin}) and (max-width: ${mediaQueries.mdMax}) {
    width: 80%;
    padding: 1rem 0;
  }
  @media (min-width: ${mediaQueries.lgMin}) {
    width: 75%;
    padding: 1rem 0;
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
  margin: 0 0 1rem;

  @media (min-width: ${mediaQueries.mdMin}) and (max-width: ${mediaQueries.mdMax}) {
    &:nth-child(2) {
      justify-content: start;
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
  @media (min-width: ${mediaQueries.xsMin}) and (max-width: ${mediaQueries.xsMax}) {
    font-size: 10px;
  }
  margin: 0 1rem;
`;
const Input = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid #9e9e9e;
  margin: 15px 0;
  padding: 0.5em;
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
    border-bottom: 2px solid #6c63ff;
    border: none;
  }
`;

const Button = styled.button`
  padding: 1rem 1.5rem;
  background-color: #6c63ff;
  border: none;
  color: #f5f5f5;
  font-weight: bold;
  &:hover {
    box-shadow: 1px 2px 7px #6c63bb;
    cursor: pointer;
  }
  &:disabled {
    cursor: default;
    background-color: #bdbdbd;
    box-shadow: none;
  }
`;

const PageInnerContent = styled.section`
  width: 70vw;
  height: 100vh;
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

