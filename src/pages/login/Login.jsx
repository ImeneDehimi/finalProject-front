import { Link, useNavigate } from "react-router-dom";
import { FaLock, FaUser } from "react-icons/fa";
import { BiErrorCircle } from "react-icons/bi";
import "./Login.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useDispatch } from "react-redux";
import {login} from "../../redux/slices/authSlice"
import { ToastContainer, toast } from "react-toastify";



const Login = () => {


const dispatch = useDispatch()
const navigate = useNavigate()

  // Forms Handling & Validation

  const schema = yup.object().shape({
    userName: yup.string().required("UserName is required"),
    password: yup.string().required("password is required").min(4).max(20),
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

    axios
      .post(`${import.meta.env.VITE_URL}/auth/login`, {
        username,
        password,

      })
      .then((res)=>{
        dispatch(
          login(res.data));
      localStorage.setItem("token", res.data.token);
    navigate("/")})
      .catch((err) => {
        if(err.response){
          if(err.response.status == 401)
          toast.error("Invalid username or password")
        }else{
          toast.error("something went wrong");
        }
      });
  };

  return (
    <div className="login">
            <ToastContainer />
      <form className="login-wrapper" onSubmit={handleSubmit(onSubmit)}>
        <h1>Welcome back</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="UserName"
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
            type="password"
            placeholder="Password"
            {...register("password")}
            name="password"
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
        
        <button type="submit">Login</button>
        <div className="register-link">
          <p>
          Don&apos;t have an account <Link to="/register">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
