import { useForm } from "react-hook-form";
import Google from "../../auth/SocialAuth/Google";
import { Link } from "react-router";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../auth/AuthContext/AuthContext";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [generatedCaptcha, setGeneratedCaptcha] = useState("7G5K9");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // useEffect(() => {
  //   loadCaptchaEnginge(6);
  // }, []);

  const handleLogin = (data) => {
    const { email, password, captcha } = data;

    if (captcha !== generatedCaptcha) {
      alert("Captcha does not match!");
      return;
    }

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="mx-auto bg-gray-100 shadow-md rounded p-8 mt-10 w-full max-w-md">
      <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
        Log In
      </h2>

      <form onSubmit={handleSubmit(handleLogin)}>
        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            {...register("email", {
              minLength: {
                value: 2,
                message: "Movie Title should be at least 2 characters.",
              },
            })}
            className="bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password Input */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            required
            {...register("password", {
              minLength: {
                value: 2,
                message: "Movie Title should be at least 2 characters.",
              },
            })}
            className="bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* {wrongPass && <p className="text-red-600">{wrongPass}</p>} */}
          <a className="flex justify-end mt-2 font-bold text-sm text-blue-500 hover:text-blue-700">
            Forgot Password?
          </a>
        </div>

        {/* Captcha validation */}
        {/* <div className="flex flex-col gap-2 w-full max-w-sm">
          <label className="text-sm font-medium text-gray-700">
            <LoadCanvasTemplate />
          </label>

        
        </div> */}

        {/* Custom Captcha*/}
        <div className="flex items-center gap-3">
          <div className="bg-gray-200 px-4 py-2 rounded font-bold ">
            {generatedCaptcha}
          </div>
          <button
            type="button"
            onClick={() =>
              setGeneratedCaptcha(
                Math.random().toString(36).substring(2, 7).toUpperCase()
              )
            }
            className="text-blue-500 hover:underline text-sm">
            Reload
          </button>
          <input
            {...register("captcha", { required: "Captcha is required" })}
            placeholder="Enter captcha"
            className="border p-2 rounded"
          />
          {errors.captcha && (
            <p className="text-red-500">{errors.captcha.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline">
            Log In
          </button>
        </div>

        {/* SignUp Page link */}
        <p className="text-center text-gray-600 mb-4">
          Don’t have an account?{" "}
          <Link to={"/signUp"} className="text-blue-500 hover:text-blue-700">
            Sign Up
          </Link>
        </p>
      </form>

      {/* Social Login */}
      <Google></Google>
    </div>
  );
};

export default Login;
