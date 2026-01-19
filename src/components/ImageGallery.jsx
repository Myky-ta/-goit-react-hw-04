import ImageCard from "./ImageCard";

export default function ImageGallery({ images, onImageClick }) {
  return (
    <ul className="gallery">
      {images.map((img) => (
        <li key={img.id}>
          <ImageCard image={img} onClick={() => onImageClick(img)} />
        </li>
      ))}
    </ul>
  );
}
