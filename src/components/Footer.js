import {
  StyledFooter,
  StyledLogo,
  StyledLogoSocials,
  FooterLogoContainer,
  FooterEmailContainer,
  FooterLeftContainer,
  FooterRightContainer,
  FooterCenterContainer,
  SmallText,
} from "../styles.js/Footer.styled";

const Footer = (props) => (
  <StyledFooter>
    <FooterLeftContainer>
      <StyledLogoSocials src={props.instagramlogo} alt="instagram logo" /> {""}
      <StyledLogoSocials src={props.facebooklogo} alt="facebook logo" /> {""}
      <StyledLogoSocials src={props.youtubelogo} alt="youtube logo" />
    </FooterLeftContainer>
    <FooterCenterContainer>
      <FooterLogoContainer>
        <StyledLogo src={props.logodark} alt="Jessica Pohl logo" />
      </FooterLogoContainer>
      <FooterEmailContainer>
        <p> art.jp@outlook.com</p>
        <SmallText>@ 2022 Jessica Pohl </SmallText>
      </FooterEmailContainer>
    </FooterCenterContainer>
    <FooterRightContainer>
      <StyledLogoSocials src={props.maillogo} alt="mail logo" /> {""}
      <p>Get in touch</p>
    </FooterRightContainer>
  </StyledFooter>
);

export default Footer;
