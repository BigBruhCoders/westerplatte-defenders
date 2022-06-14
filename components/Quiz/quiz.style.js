import styled from "styled-components";

export const Main = styled.main`
  margin: calc(var(--navbar-height) + 1rem) 30rem auto;
  background-color: ${props => props.theme.quiz_background};
  border: 2px solid ${props => props.theme.main_color};
  color: ${props => props.theme.main_color};
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  @media (max-width: 1500px) {
    margin-left: 10rem;
    margin-right: 10rem;
  }

  @media (max-width: 800px) {
    margin: calc(var(--navbar-height)) 2rem 0;
    border-radius: 0;
    border: 2px solid transparent;
    flex-grow: 2;
  }

  @media (max-width: 500px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const StartButton = styled.button`
  border: 2px solid ${props => props.theme.main_color};
  color: ${props => props.theme.quiz_button_text};
  background-color: ${props => props.theme.quiz_button};
  border-radius: 1rem;
  cursor: pointer;
  padding: 2rem 0;
  margin: 0 auto;
  width: 50%;
  font-size: clamp(1rem, 1vw, 20rem);
  transition-duration: .3s;

  :focus-visible {
    outline: 2px solid royalblue;
  }

  :is(:focus-visible, :hover) {
    color: #fff;
    background-color: ${props => props.theme.main_color};
  }
`;

export const EndButton = styled(StartButton)`
  margin-top: 2rem;
`;

export const AnswerButton = styled.button`
  border: 2px solid ${props => props.theme.main_color};
  color: ${props => props.theme.quiz_button_text};
  background-color: ${props => props.theme.quiz_button};
  border-radius: 1rem;
  cursor: pointer;
  margin: 1rem;
  padding: 1rem;
  width: 50%;
  font-size: clamp(1rem, 1vw, 20rem);
  transition-duration: .3s;
  align-self: center;

  @media (max-width: 600px) {
    :focus-visible {
      outline: 2px solid royalblue;
    }

    :is(:focus-visible, :hover) {
      color: #fff;
      background-color: ${props => props.theme.main_color};
    }
  }
`;

export const MainQuestion = styled.p`
  margin: 1rem;
  font-weight: bold;
  font-size: 2rem;
`;

export const Congratulations = styled(MainQuestion)`
  text-align: center;
`;

export const AnswerBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
`;

export const Score = styled.p`
  font-size: 2rem;
  text-align: center;
`;