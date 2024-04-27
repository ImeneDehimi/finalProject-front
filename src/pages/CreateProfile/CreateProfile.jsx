import "./CreateProfile.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Link } from "react-router-dom";

const CreateProfile = () => {
  return (
    <div className="create-profile">
      <form>
        <h1>Set up your profile</h1>
        <span className="create-profile-line"></span>
        <label>Business hours</label>
        <FormGroup row>
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Saturday"
            sx={{
              "& .MuiCheckbox-root.Mui-checked": { color: "#FF9E2A" },
            }}

          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Sunday"
            sx={{
              "& .MuiCheckbox-root.Mui-checked": { color: "#FF9E2A" },
            }}
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Monday"
            sx={{
              "& .MuiCheckbox-root.Mui-checked": { color: "#FF9E2A" },
            }}
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Tuesday"
            sx={{
              "& .MuiCheckbox-root.Mui-checked": { color: "#FF9E2A" },
            }}
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Wednesday"
            sx={{
              "& .MuiCheckbox-root.Mui-checked": { color: "#FF9E2A" },
            }}
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Thursday"
            sx={{
              "& .MuiCheckbox-root.Mui-checked": { color: "#FF9E2A" },
            }}
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Friday"
            sx={{
              "& .MuiCheckbox-root.Mui-checked": { color: "#FF9E2A" },
            }}
          />
        </FormGroup>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["TimePicker", "TimePicker"]}>
            <TimePicker
              label="Starting time"
              defaultValue={dayjs("2024-05-17T09:00")}
              sx={{
                "& .MuiInputLabel-root.Mui-focused": { color: "#979797" }, //styles the label
                "& .MuiOutlinedInput-root": {
                  "&:hover > fieldset": { borderColor: "#FF9E2A" },
                },
              }}
            />
            <TimePicker
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
        <label className="labels">Wilaya</label>
        <input type="text" placeholder="" className="wilaya-input" />
        <label className="labels">Description</label>
        <textarea rows={5}></textarea>
        <Link><button className="create-profile-button">Next</button></Link>
      </form>

    </div>
  );
};

export default CreateProfile;
