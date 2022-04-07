import { HomeContainer, StyledHeroImage } from "../styles.js/Home.styled";
import { useEffect } from "react";
const Home = (props) => {
  let images = [
    props.paintings[3].image,
    props.paintings[48].image,
    props.paintings[2].image,
  ];

  let index = 0;

  useEffect(() => {
    change();
    const intervalId = setInterval(change, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function change() {
    document.getElementById("homepagePainting").src = images[index];
    if (index == images.length - 1) {
      index = 0;
    } else {
      index++;
    }
  }

  return (
    <HomeContainer>
      <StyledHeroImage id="homepagePainting" />
    </HomeContainer>
  );
};

export default Home;
