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
    <div className="w-full h-screen bg-[url(/img/bg.jpeg)] bg-fixed bg-no-repeat bg-cover bg-center pt-20">
      <div className="max-w-xl mx-auto bg-[#121a23] py-8 px-10 rounded-lg">
        <div className="text-white">
          <h2 className="text-5xl font-bold mb-3 font-zentry">LOG IN</h2>
          <p className="font-outfit text-[#adb0bc]">
            Welcome Back! Ready to log in? Just enter your username and password
            below and you'll be back in action in no time.
          </p>
        </div>

        <form onSubmit={handleSubmit(handleLogin)} className="pt-10">
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-white font-bold mb-2">Email</label>
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
              className="w-full py-3 px-5 border border-[rgb(76,76,76,0.2)] rounded-xs text-white bg-[#182029] leading-tight focus:outline-none focus:ring-1 focus:ring-yellow300"
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
              className="w-full py-3 px-5 border border-[rgb(76,76,76,0.2)] rounded-xs text-white bg-[#182029] leading-tight focus:outline-none focus:ring-1 focus:ring-yellow300"
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
              setGeneratedCaptcha={setGeneratedCaptcha}
            ></Captcha>

            <input
              {...register("captcha", { required: "Captcha is required" })}
              placeholder="Enter captcha"
              className="w-full py-3 px-5 mt-3 border border-[rgb(76,76,76,0.2)] rounded-xs text-white bg-[#182029] leading-tight focus:outline-none focus:ring-1 focus:ring-yellow300"
            />
            {errors.captcha && (
              <p className="text-red-500">{errors.captcha.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between mt-4">
            <button
              type="submit"
              className="w-full py-3 px-5 mt-3 border border-[rgb(76,76,76,0.2)] rounded-xs text-blue200 font-bold bg-yellow300 leading-tight focus:outline-none focus:ring-1 focus:ring-yellow300"
            >
              Log In
            </button>
          </div>

          {/* SignUp Page link */}
          <p className="text-center text-gray-600 mt-4">
            Don’t have an account?{" "}
            <Link to={"/signUp"} className="text-blue-500 hover:text-blue-700">
              Sign Up
            </Link>
          </p>
        </form>

        {/* Social Login */}
        <Google></Google>
      </div>
    </div>
  );
};

export default Login;
