import "./UpdateProfile.css"
import file from "../../assets/File.webp";
import { useRef, useState } from "react";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const UpdateProfile = ({profile}) => {
 
    const {category, description, wilaya, user, _id} = profile
    const profileImgs = profile?.images
    const [images, setImages] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);
  const [profileImages, setProfileImages] = useState([])
  const [token, setToken] = useState(localStorage.getItem('token') || null);

    
  function selectFiles() {
    fileInputRef.current.click();
  }
  function onFileSelect(event) {
    const files = event.target.files;
    if (files.length == 0) return;
    for (let i = 0; i < files.length; i++) {
      setProfileImages((prevImages) => [
        ...prevImages,files[i]
       
      ]);
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
      setProfileImages((prevImages) => [
        ...prevImages,files[i]
       
      ]);
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

    const [checkboxState, setCheckboxState] = useState({
      Saturday: false,
      Sunday: false,
      Monday: false,
      Tuesday: false,
      Wednesday: false,
      Thursday: false,
      Friday: false,
    });
    const handleCheckboxChange = (event, day) => {
      setCheckboxState({
       ...checkboxState,
        [day]: event.target.checked,
      });
     
    };
    const selectedDays = Object.entries(checkboxState).filter(([day, value]) => value === true);
    const days = selectedDays.map((day) => day[0]);

    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(event.target);
      const startingHour = formData.get('startingHour')
      const endingHour = formData.get('endingHour')
      const businesshrs = [{day : days,
        startingHour: startingHour,
        endingHour: endingHour}]
      const category = formData.get('category')
      const wilaya = formData.get('wilaya')
      const description = formData.get('description')
      const username = formData.get('username')
      const email = formData.get('email')
      axios.put(`${import.meta.env.VITE_URL}/profile/${_id}`, {
        businesshrs, 
        category, 
        wilaya,
        description,
        
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then((res)=>{
        console.log(res.data);
        toast.success('profile updated')
      })
      .catch((err) => console.log(err))
      axios.put(`${import.meta.env.VITE_URL}/user/${user?._id}`, {
        username,
        email
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then((res)=>{
        console.log(res.data);
        toast.success('profile updated')
      })
      .catch((err) => console.log(err))
      
    }

    const uploadPhotos = () =>{
        let formData=new FormData()
        profileImages.forEach((file)=>{
          formData.append("images",file)
        })
        axios.put(`${import.meta.env.VITE_URL}/profile/${_id}`,formData, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then((res)=>{console.log(res.data)
          setImages([])
          toast.success('Images updated')
        })
        .catch((err) => console.log(err))
      

    }
  return (
    <div className="updateprofile">
       <ToastContainer />
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" name="username" placeholder="User Name" defaultValue={user?.username}/>
        <input type="text" name="email" placeholder="Email" defaultValue={user?.email}/>
        <input type="text" name="wilaya" placeholder="wilaya" defaultValue={wilaya}/>
        <select name="category" required>
          <option value={category}>{category}</option>
          <option value="electrician">Electrician</option>
          <option value="plumber">Plumber</option>
          <option value="painter">Painter</option>
          <option value="builder">Builder</option>
        </select>
        
        <textarea name="description" id="" placeholder="Description" rows={5}>{description}</textarea>
        <div className="updatetime">
        <FormGroup row>
          <FormControlLabel
            control={<Checkbox size="small" onChange={(e) => handleCheckboxChange(e, "Saturday")}/>}
            label="Saturday"
            sx={{
              "& .MuiCheckbox-root.Mui-checked": { color: "#FF9E2A" },
            }}
          />
          <FormControlLabel
            control={<Checkbox size="small" onChange={(e) => handleCheckboxChange(e, "Sunday")}/>}
            label="Sunday"
            sx={{
              "& .MuiCheckbox-root.Mui-checked": { color: "#FF9E2A" },
            }}
          />
          <FormControlLabel
            control={<Checkbox size="small"  onChange={(e) => handleCheckboxChange(e, "Monday")}/>}
            label="Monday"
            sx={{
              "& .MuiCheckbox-root.Mui-checked": { color: "#FF9E2A" },
            }}
          />
          <FormControlLabel
            control={<Checkbox size="small" onChange={(e) => handleCheckboxChange(e, "Tuesday")}/>}
            label="Tuesday"
            sx={{
              "& .MuiCheckbox-root.Mui-checked": { color: "#FF9E2A" },
            }}
          />
          <FormControlLabel
            control={<Checkbox size="small" onChange={(e) => handleCheckboxChange(e, "Wednesday")}/>}
            label="Wednesday"
            sx={{
              "& .MuiCheckbox-root.Mui-checked": { color: "#FF9E2A" },
            }}
          />
          <FormControlLabel
            control={<Checkbox size="small" onChange={(e) => handleCheckboxChange(e, "Thursday")}/>}
            label="Thursday"
            sx={{
              "& .MuiCheckbox-root.Mui-checked": { color: "#FF9E2A" },
            }}
          />
          <FormControlLabel
            control={<Checkbox size="small" onChange={(e) => handleCheckboxChange(e, "Friday")}/>}
            label="Friday"
            sx={{
              "& .MuiCheckbox-root.Mui-checked": { color: "#FF9E2A" },
            }}
          />
        </FormGroup>
        <LocalizationProvider dateAdapter={AdapterDayjs} >
          <DemoContainer components={["TimePicker", "TimePicker"]}>
            <TimePicker
            name="startingHour"
              label="Starting time"
              defaultValue={dayjs("2024-05-17T09:00")}
              sx={{
                "& .MuiInputLabel-root.Mui-focused": { color: "#979797" }, //styles the label
                "& .MuiOutlinedInput-root": {
                  "&:hover > fieldset": { borderColor: "#FF9E2A"},
                },
              }}
            />
            <TimePicker
            name="endingHour"
              label="Ending time"
              defaultValue={dayjs("2024-05-17T16:30")}
              sx={{
                "& .MuiInputLabel-root.Mui-focused": { color: "#979797" }, //styles the label
                "& .MuiOutlinedInput-root": {
                  "&:hover > fieldset": { borderColor: "#FF9E2A" },
                },
              }}
            />
          </DemoContainer>
        </LocalizationProvider>
        </div>
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
      <button onClick={uploadPhotos} className="updateimages-btn">upload</button>
    </div>
  );
};

export default UpdateProfile;
