import { Link } from "react-router-dom";
import { FaLock, FaUser } from "react-icons/fa";
import { BiErrorCircle } from "react-icons/bi";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateFormData } from "../../redux/slices/formSlice";

const Login = () => {
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

  // storing data in redux

  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);

  const handleInputChange = (e) => {
    const { username, value } = e.target;
    console.log(e.target);
    dispatch(updateFormData({ field: username, value }));
  };
  return (
    <div className="login">
      <form className="login-wrapper" onSubmit={handleSubmit(onSubmit)}>
        <h1>Welcome back</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="UserName"
            value={formData.username}
            onChange={handleInputChange}
            {...register("userName")}
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
            value={formData.email}
            onChange={handleInputChange}
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
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <Link>forgot password</Link>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>
            Don't have an account <Link to="/register">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
