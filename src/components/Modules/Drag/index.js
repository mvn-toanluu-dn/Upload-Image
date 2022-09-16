import { useRef } from "react";
import drag from "./drag.svg"
const Drag = ({ handleChange }) => {
  const drop = useRef(null);

  const handleDragEnter = () => drop.current.classList.add("dragover");
  const handleLeave = () => drop.current.classList.remove("dragover");
  const handleDrop = (e) => {
    drop.current.classList.remove("dragover");
    e.target.value = null;
  };
  return (
    <>
      <div
        className="drag-drop "
        ref={drop}
        onDrop={handleDrop}
        onDragEnter={handleDragEnter}
        onDragLeave={handleLeave}
      >
        <label id="label-file-upload" htmlFor="input-file-upload">
          <img src={drag} alt="" className="drag-icon" />
          <span className="drag-title">Drag & Drop</span>
          <span className="drag-upload">Your files here to upload</span>
          <span className="drag-only">Only JPEG, PNG files with max size 15mb </span>
          <input
            type="file"
            id="input-file-upload"
            multiple
            accept="/*"
            onChange={handleChange}
          />
        </label>
      </div>
    </>
  );
};

export default Drag;
