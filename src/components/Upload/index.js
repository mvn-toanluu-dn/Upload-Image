import React, { useState } from "react";
import plus from "./plus.svg";
import Modal from "../Modules/Modal";
import Drag from "../Modules/Drag";
import ImageItem from "../Modules/ImageItem";
const FileUpLoad = () => {
  const [images, setImages] = useState([]);
  const [isToggle, setIsToggle] = useState(false);
  const [item, setItem] = useState();
  const [isChange, setIsChange] = useState(false);

  const handleChange = (e) => {
    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      images.push({ id: images.length + 1, data: files[i] });
    }
    setImages([...images]);
  };
  const handleDelete = (id,index) => {
    const newData = images.filter((item) => item.id !== id);
    const del = document.querySelectorAll(".img-item");
    del[index].classList.add("del");
   const time =  setTimeout(() => {
        del[index].classList.remove("del");
        setImages(newData);
    }, 500);
    return(()=>{
        window.clearTimeout(time)
    })

  };

  const handleDetail = (id) => {
    const imgDetail = images.find((item) => item.id === id);
    setItem(imgDetail);
  };

  return (
    <>
      <div className="change-layout">
        <button
          onClick={() => setIsChange(!isChange)}
          className="btn btn-change"
        >
          Change Layout: {isChange ? "List Item" : "Drag & Drop"}
        </button>
      </div>
      {isChange ? (
        <>
          <h4 className="title">Upload File</h4>
          <label htmlFor="image" className="btn btn-upload">
            <img src={plus} alt="" className="plus-icon" />
            Upload
          </label>
          <input
            className="input-form"
            type="file"
            id="image"
            multiple
            accept="image/*"
            onChange={handleChange}
            style={{ display: "none" }}
          />
          <ImageItem
            images={images}
            setIsToggle={setIsToggle}
            handleDelete={handleDelete}
            handleDetail={handleDetail}
          />
          {!isToggle ? (
            <div className="modal is-hidden"></div>
          ) : (
            <Modal item={item} setIsToggle={setIsToggle} isToggle={isToggle} />
          )}
        </>
      ) : (
        <>
          <Drag handleChange={handleChange} />
          <ImageItem
            images={images}
            setIsToggle={setIsToggle}
            handleDelete={handleDelete}
            handleDetail={handleDetail}
          />
          {!isToggle ? (
            <div className="modal is-hidden"></div>
          ) : (
            <Modal item={item} setIsToggle={setIsToggle} isToggle={isToggle} />
          )}
        </>
      )}
    </>
  );
};

export default FileUpLoad;
