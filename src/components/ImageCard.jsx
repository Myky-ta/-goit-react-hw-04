const ImageCard = ({ image, onImageClick }) => {
  return (
    <li className="card">
      <img
        src={image.urls.small}
        alt={image.alt_description || "Unsplash image"}
        onClick={() => onImageClick(image)}
        className="card-img"
      />
    </li>
  );
};

export default ImageCard;
