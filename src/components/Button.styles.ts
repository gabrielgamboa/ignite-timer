import styled from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  success: "green",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  margin: 0.5rem;

  /* ${(props) => {
    return `background-color: ${buttonVariants[props.variant]}`;
  }}; */
`;
