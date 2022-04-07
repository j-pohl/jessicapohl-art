import styled from "styled-components";

export const StyledShop = styled.div`
  text-align: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 40px;
  display: inline flex;
  flex-wrap: wrap;
  background-color: #000000;
`;

export const ImageContainer = styled.img`
  max-height: 30vh;
  max-width: 30vh;
  padding: 0 50px;
`;

export const ShopHeader = styled.div`
  display: flex;
  justify-content: center;
  background-color: #282c34;
  font-size: calc(10px + 2vmin);
  color: rgb(216, 200, 165);
  text-align: center;
`;
export const ShopContainer = styled.div`
  margin: 0;
  display: inline flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 40px;
  background-color: #282c34;
  font-size: calc(10px + 2vmin);
  color: rgb(216, 200, 165);
  min-height: 100vh;
`;
