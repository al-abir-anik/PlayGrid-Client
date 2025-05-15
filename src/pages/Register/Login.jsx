import { useForm } from "react-hook-form";
import Google from "../../auth/SocialAuth/Google";
import { Link, useNavigate } from "react-router";
import { useContext, useState } from "react";
import AuthContext from "../../auth/AuthContext/AuthContext";
import Captcha from "../../components/Captcha/Captcha";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);
  const [generatedCaptcha, setGeneratedCaptcha] = useState("aaA56");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    const { email, password, captcha } = data;

    if (captcha !== generatedCaptcha) {
      alert("Captcha does not match!");
      setGeneratedCaptcha(
        Math.random()
          .toString(36)
          .substring(2, 7)
          .split("")
          .map((c) => (Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()))
          .join("")
      );
      return;
    }

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate("/");
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

        {/* Captcha Input */}
        <div className="items-center gap-3">
          <Captcha
            generatedCaptcha={generatedCaptcha}
            setGeneratedCaptcha={setGeneratedCaptcha}></Captcha>

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
            className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline">
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
