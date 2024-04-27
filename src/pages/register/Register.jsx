import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { BiErrorCircle } from "react-icons/bi";
import { FaLock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import * as yup from "yup";
import "./../login/Login.css";
import { useState } from "react";

const Register = () => {
  // handling chackbox
  const [checkbox1Checked, setCheckbox1Checked] = useState(false);
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
    password: yup.string().required("password is required").min(4).max(20),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };
  

  return (
    <div className="login">
      
      <form className="login-wrapper" onSubmit={handleSubmit(onSubmit)}>
        <h1>Create an account</h1>
        <div className="input-box">
          <input type="name" placeholder="Username" {...register("userName")} />
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
          <input type="email" placeholder="Email" {...register("email")} />
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
            type="password"
            placeholder="Password"
            {...register("password")}
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
        <label>
          <input
            type="checkbox"
            checked={checkbox1Checked}
            onChange={handleCheckbox1Change}
            className="register-checkbox"
          />{" "}
          Register as service provider
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={checkbox2Checked}
            onChange={handleCheckbox2Change}
            className="register-checkbox"
          />{" "}
          Register as service requester
        </label>
        <div className="remember-forgot">
          <Link>forgot password</Link>
        </div>
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
