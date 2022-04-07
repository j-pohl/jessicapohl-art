import { GalleryContainer, ImageContainer } from "../styles.js/Gallery.styled";

const Gallery = (props) => {
  return (
    <GalleryContainer>
      <h2>Gallery</h2>
      {props.paintings.map((painting, artworkId) => (
        <ImageContainer
          key={artworkId}
          src={painting.image}
          alt="galleryimage"
        />
      ))}
    </GalleryContainer>
  );
};

export default Gallery;
