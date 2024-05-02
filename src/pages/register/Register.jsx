import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { BiErrorCircle } from "react-icons/bi";
import { FaLock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import "./../login/Login.css";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { registration } from "../../redux/slices/authSlice";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // handling chackbox
  const [checkbox1Checked, setCheckbox1Checked] = useState(true);
  const [checkbox2Checked, setCheckbox2Checked] = useState(false);

  const handleCheckbox1Change = () => {
    setCheckbox1Checked(!checkbox1Checked);
    if (!checkbox1Checked) {
      setCheckbox2Checked(false);
    }
  };
  const handleCheckbox2Change = () => {
    setCheckbox2Checked(!checkbox2Checked);
    if (!checkbox2Checked) {
      setCheckbox1Checked(false);
    }
  };
  // Forms Handling & Validation
  const schema = yup.object().shape({
    userName: yup.string().required("UserName is required"),
    email: yup.string().required("email is required").email(),
    password: yup.string().required("password is required").min(8).max(20),
    role: yup.array().required("role is required").min(1,'select a role'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  
  const onSubmit = () => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get("userName");
    const password = formData.get("password");
    const email = formData.get("email");
    const role = formData.get("role");
if(role == "user"){
  axios
  .post("http://localhost:5000/v1/auth/register", {
    email,
    username,
    password,
    role,
  })
  .then((res)=>{
    dispatch(registration(res.data))
    toast.success("registration successful!");
  })
  .catch((err) => {if(err.response){
    if(err.response.status == 400)
    toast.error("username or email exists")
  }else{
    toast.error(err.message);
  }});
}else if(role== "serviceProvider"){
  axios
  .post("http://localhost:5000/v1/auth/register", {
    email,
    username,
    password,
    role,
  })
  .then((res)=>{
    dispatch(registration(res.data))
    navigate("./createprofile")
  })
  .catch((err) =>{ 
    if(err.response){
      if(err.response.status == 400)
      toast.error("username or email exists")
    }else{
      toast.error(err.message);
    }
    });
}

  };

  return (
    <div className="login">
      <ToastContainer />
      <form className="login-wrapper" onSubmit={handleSubmit(onSubmit)}>
        <h1>Create an account</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            {...register("userName")}
            name="userName"
          />
          <FaUser className="login-icon" />
          {errors.userName ? (
            <span className="signin-error">
              <BiErrorCircle />
              {errors.userName?.message}
            </span>
          ) : (
            <></>
          )}
        </div>
        <div className="input-box">
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            name="email"
          />
          <MdEmail className="login-icon" />
          {errors.email ? (
            <span className="signin-error">
              <BiErrorCircle />
              {errors.email?.message}
            </span>
          ) : (
            <></>
          )}
        </div>
        <div className="input-box">
          <input
            {...register("password")}
            name="password"
            type="password"
            placeholder="Password"
          />
          <FaLock className="login-icon" />
          {errors.password ? (
            <span className="signin-error">
              <BiErrorCircle />
              {errors.password?.message}
            </span>
          ) : (
            <></>
          )}
        </div>
        <input
          {...register("role")}
          name="role"
          value="serviceProvider"
          type="checkbox"
          checked={checkbox1Checked}
          onChange={handleCheckbox1Change}
          className="register-checkbox"
        />{" "}
        <label>Register as service provider</label>
        <br />
        <input
          name="role"
          {...register("role")}
          value="user"
          type="checkbox"
          checked={checkbox2Checked}
          onChange={handleCheckbox2Change}
          className="register-checkbox"
        />{" "}
        <label>Register as service requester</label>
        {errors.role ? (
          <span className="signin-error">
            <BiErrorCircle />
            {errors.role?.message}
          </span>
        ) : (
          <></>
        )}
        <button type="submit">Register</button>
        <div className="register-link">
          <p>
            You have an account <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;