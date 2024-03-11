import { styled } from "styled-components";
import PrimaryButton from "../../../../components/PrimaryButton";

export const RollingPrimaryButton = styled(PrimaryButton)`
  width: 12rem;
`;

export const RollingMessageModalBackground = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
`;

export const RollingMessageSender = styled.h1`
  margin-bottom: 0.6rem;
  color: ${(props) => props.theme.textColor};
  & span {
    font-weight: 700;
  }

  @media (max-width: 470.5px) {
    font-size: 1rem;
  }
`;

export const RollingMessageModalWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  background: ${(props) => props.theme.backgroundColor};
  transform: translateX(-50%) translateY(-50%);
  border-radius: 1.6rem;
  padding: 4rem;
  width: 60rem;
  height: 47.6rem;
  top: 50%;
  left: 50%;

  & header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.9rem;
    width: 100%;
    color: ${(props) => props.theme.textColor};

    & section {
      display: flex;
      align-items: center;
      column-gap: 1.6rem;

      & section {
        display: flex;
        flex-flow: column;
        align-items: flex-start;
      }
    }
  }

  @media (max-width: 767.5px) {
    width: 45rem;
    height: 38rem;
  }

  @media (max-width: 470.5px) {
    width: 95%;
  }
`;

export const PostProfileImg = styled.div`
  background-image: url(${(props) => `${props.image}`});
  background-size: contain;
  background-position: center;
  border-radius: 50%;
  height: 5.6rem;
  min-width: 5.6rem;
  width: 5.6rem;
`;

export const ModalMessageTextArea = styled.textarea`
  font-family: ${(prop) => prop.fontFamily || "pretendard"};

  padding-right: 2rem;
  border: none;
  resize: none;
  width: 100%;
  height: 24rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.textColor};
  background: ${(props) => props.theme.backgroundColor};
  @media (max-width: 470.5px) {
    font-size: 1.5rem;
  }
  &:focus {
    outline: none;
  }

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-grayscale-200);
  }
  &::-webkit-scrollbar-track {
    background-color: var(--color-white);
  }
`;

export const RelationBadge = styled.h3`
  background-color: var(
    --color-${(prop) => (prop.color === "error" ? prop.color : prop.color + "-100")}
  );
  color: var(--color-${(prop) => prop.color}-500);
  display: flex;
  margin-bottom: 0;
  width: max-content;
  padding: 0 0.8rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.4rem;
`;

export const RollingMessageModalSeparator = styled.div`
  background-color: var(--color-grayscale-200);
  width: 100%;
  height: 0.1rem;
  margin-bottom: 1.6rem;
`;
