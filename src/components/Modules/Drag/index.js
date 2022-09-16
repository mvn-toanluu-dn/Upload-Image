import { useRef } from "react";

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
        Drag and drop your file here
      <input
        type="file"
        id="input-file-upload"
        multiple
        accept="image/*"
        onChange={handleChange}
      />
      </label>
      
    </div>
    </>
  );
};

export default Drag;
