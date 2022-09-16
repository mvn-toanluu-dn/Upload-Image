import React from "react";
import trash from "./delete.svg";
import eye from "./eye.svg";
const ImageItem = ({
  images,
  setIsToggle,
  isToggle,
  handleDelete,
  handleDetail,
}) => {
  return (
    <ul className="img-list">
      {images &&
        images.map((image, index) => (
          <li className="img-item" key={index} >
            <a className="img-box" href="/#">
              <img
                className="img-up"
                src={URL.createObjectURL(image.data)}
                alt=""
              />
              <img
                src={trash}
                alt=""
                onClick={() => handleDelete(image.id)}
                className="delete-icon"
              />
              <img
                src={eye}
                className="eye-icon"
                id="eye-modal"
                alt=""
                onClick={() => {
                  handleDetail(image.id);
                  setIsToggle(!isToggle);
                }}
              />
              <span className="img-item-name">{image.data.name}</span>
            </a>
          </li>
        ))}
    </ul>
  );
};

export default ImageItem;
