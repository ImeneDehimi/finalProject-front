import "./CreateProfile.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const CreateProfile = () => {
  const {id} = useParams();
  const navigate = useNavigate()

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

    axios.post("http://localhost:5000/v1/profile", {
      businesshrs, 
      category, 
      wilaya,
      description,
      user : id,
    })
    .then((res)=>{
      const profileId = res.data._id
      navigate(`/upload/${profileId}`)
    })
    .catch((err) => console.log(err))
  }
  
  return (
    <div className="create-profile">
      <form onSubmit={(e)=>handleSubmit(e)}>
        <h1>Set up your profile</h1>
        <span className="create-profile-line"></span>
        <label>Business hours</label>
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
          <label>Category</label>
          <select id="selectbox1" name="category"  required>
            <option value="electrician">Electrician</option>
            <option value="plumber">Plumber</option>
            <option value="painter">Painter</option>
            <option value="builder">Builder</option>
          </select>
          <label>Wilaya</label>
          <input  type="text" name="wilaya" className="wilaya-input" required/>
        <label >Description</label>
        <textarea name="description" rows={4}></textarea>
       
          <button type="submit" className="create-profile-button">Next</button>
     
      </form>
    </div>
  );
};

export default CreateProfile;
