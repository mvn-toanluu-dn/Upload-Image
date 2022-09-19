import React, { useRef } from "react";
import close from "./close.svg";
const Modal = ({ item, setIsToggle, isToggle }) => {
  const ref = useRef();
  const handleClick = () => {
    const timeId = setTimeout(() => {
      setIsToggle(!isToggle);
    }, 500);

    ref.current?.classList.add("opacity");
    return () => {
      window.clearTimeout(timeId);
    };
  };

  return (
    <div ref={ref}  className="modal is-show">
      <div className="modal-content ">
        <div className="img-content">
          <h4 className="img-name">
            {item?.data.name}
            <span className="img-size">{item?.data.size} kB</span>
          </h4>
          <img
            onClick={() => {
              handleClick();
            }}
            src={close}
            alt=""
            className="close"
          />
        </div>
        <div className="img-detail">
          <img src={URL.createObjectURL(item?.data)} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
