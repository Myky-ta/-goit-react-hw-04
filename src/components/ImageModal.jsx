import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onClose, image }) {
  if (!image) return null;

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="modal">
      <div>
        <img src={image.urls.regular} alt={image.alt_description} />
        <p>Author: {image.user.name}</p>
        <p>Likes: {image.likes}</p>
        <p>{image.description || "No description"}</p>
      </div>
    </Modal>
  );
}
