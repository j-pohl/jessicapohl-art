import styled from "styled-components";

export const AboutContainer = styled.div`
  margin: 0;
  background-color: #282c34;
  font-size: calc(10px + 2vmin);
  text-align: center;
  display: flex;
  padding: 20px;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  color: rgb(216, 200, 165);
`;

export const AboutImageContainer = styled.img`
  diplay: inline flex;
  padding: 10px;
  max-width: 200px;
  border-radius: 50px;
`;

export const TextContainer = styled.div`
  color: white;
  max-width: 60%;
  padding-top: 20px;
  color: rgb(216, 200, 165);
  font-size: calc(10px + 1vmin);
  padding-top: 10px;
  padding-bottom: 40px;
`;
