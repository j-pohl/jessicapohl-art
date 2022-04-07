import styled from "styled-components";

export const GalleryContainer = styled.div`
  text-align: center;
  padding: 40px;
  background-color: #282c34;
  font-size: calc(10px + 2vmin);
  color: rgb(216, 200, 165);
  min-height: 100vh;
`;

export const ImageContainer = styled.img`
  diplay: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 30px;
  max-width: 30vh;
  border: 1px solid black;
`;
