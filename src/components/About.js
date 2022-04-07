import {
  AboutContainer,
  AboutImageContainer,
  TextContainer,
} from "../styles.js/About.styled";

const About = (props) => {
  return (
    <AboutContainer>
      <h2>About</h2>
      <TextContainer>
        <p>Hi, I am Jessica.</p>
        <AboutImageContainer src={props.about} alt={"image of artist"} />
        <p>I have always painted and drawn, for as long as I can remember.</p>
        <p>
          What fascinates me about art is how unique it is, when I sit down to
          paint or draw I will create something that has never existed before
          and will never exist again, and if I do not sit down to express it it
          never will exist. The same is true for every other artist out there
          throughout the time we get to spend on this rock floating through
          space, and that thought is fascinating and keeps me picking up my
          paint brushes and pencils time and time again.
        </p>
        <p>
          {" "}
          I have also really appreciated all the many opportunities I have had
          to paint commissions of pets, and these pet portraits have brought me
          and the pet owners great joy. In a lot of cases I was given the chance
          to capture the essence of beloved pets that have passed, and have been
          able to provide the owners with a lasting memory of their friends.
        </p>
        <p>
          My favourite mediums are acrylic and oil colours and I enjoy pencil
          and ink drawings as well.
        </p>
        <p>
          {" "}
          I am open for commissions, please send me an email to the address
          below if you are interested in commmissioning an art piece. I look
          forward to hearing from you!
        </p>
      </TextContainer>
    </AboutContainer>
  );
};

export default About;
