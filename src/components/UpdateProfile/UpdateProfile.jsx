import "./UpdateProfile.css"
import file from "../../assets/File.webp";
import { useRef, useState } from "react";

const UpdateProfile = () => {
    const [images, setImages] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);
  
    function selectFiles() {
      fileInputRef.current.click();
    }
    function onFileSelect(event) {
      const files = event.target.files;
      if (files.length == 0) return;
      for (let i = 0; i < files.length; i++) {
        if (files[i].type.split("/")[0] !== "image") continue;
        if (!images.some((e) => e.name == file[i].name)) {
          setImages((prevImages) => [
            ...prevImages,
            {
              name: files[i].name,
              url: URL.createObjectURL(files[i]),
            },
          ]);
        }
      }
    }
    function deleteImage(index) {
      setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    }
    function onDragOver(event) {
      event.preventDefault();
      setIsDragging(true);
      event.dataTransfer.dropEffect = "copy";
    }
    function onDragLeave(event) {
      event.preventDefault();
      setIsDragging(false);
    }
    function onDrop(event) {
      event.preventDefault();
      setIsDragging(false);
      const files = event.dataTransfer.files;
      for (let i = 0; i < files.length; i++) {
        if (files[i].type.split("/")[0] !== "image") continue;
        if (!images.some((e) => e.name == file[i].name)) {
          setImages((prevImages) => [
            ...prevImages,
            {
              name: files[i].name,
              url: URL.createObjectURL(files[i]),
            },
          ]);
        }
      }
    }
  return (
    <div className="updateprofile">
      <form>
        <input type="text" placeholder="User Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="wilaya" />
        <select name="category" required>
          <option value="electrician">Electrician</option>
          <option value="plumber">Plumber</option>
          <option value="painter">Painter</option>
          <option value="builder">Builder</option>
        </select>
        <textarea name="description" id="" placeholder="Description" rows={5}></textarea>
        <button className="update-btn">Update</button>
      </form>

      <div className="edit-upload-wrapper">
        <h3>Work images</h3>
        <div
          className="upload"
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          {isDragging ? (
            <>
              <div className="file-image">
                <img src={file} alt="" />
              </div>
              <h3>Drop images here</h3>
            </>
          ) : (
            <>
              <div className="file-image">
                <img src={file} alt="" />
              </div>
              <h3>
                Drag and drop or{" "}
                <span role="button" onClick={selectFiles}>
                  Browse
                </span>
              </h3>
              <p>Support all image format</p>
            </>
          )}

          <input
            name="file"
            type="file"
            className="file"
            multiple
            ref={fileInputRef}
            onChange={onFileSelect}
          />
        </div>
        <div className="uploaded-imgs">
          {images.map((images, index) => (
            <div className="uploaded-img" key={index}>
              <span className="upload-delete" onClick={() => deleteImage(index)}>
                &times;
              </span>
              <img src={images.url} alt={images.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;