import styled from "styled-components";

const CardStyle = styled.div`
  display: flex;
  position: relative;
  width: 16.8rem;
  height: 16.8rem;
  border-radius: 1.6rem;
  background: var(${({ color }) => color});
  background-size: cover;

  .check-image {
    position: absolute;
    width: 4.4rem;
    height: 4.4rem;
    top: 6.2rem;
    left: 6.2rem;
    z-index: 1;
  }

  .select-opacity {
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 0.5;
  }
  @media screen and (max-width: 768px) {
    .check-image {
      top: 5.5rem;
      left: 5.5rem;
    }
  }
`;

export default CardStyle;
