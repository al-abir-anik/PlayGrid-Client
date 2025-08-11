import { Link, Navigate, useNavigate } from "react-router";
import Google from "../../auth/SocialAuth/Google";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import AuthContext from "../../auth/AuthContext";
import axios from "axios";
import Captcha from "../../auth/Captcha";

const imageHostingKey = import.meta.env.VITE_imagebbHostingKey;
const imageUploadAPI = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const Signup = () => {
  const navigate = useNavigate();
  const { setUser, createUser, updateUserProfile } = useContext(AuthContext);
  const [generatedCaptcha, setGeneratedCaptcha] = useState("aaA56");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignup = async (data) => {
    const { fullname, imageFile, email, password, captcha } = data;

    // handle captcha
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
    // host image file
    const image = imageFile[0];
    const formData = new FormData();
    formData.append("image", image);
    const imageBbRes = await axios.post(imageUploadAPI, formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    createUser(email, password)
      .then((result) => {
        setUser(result.user);
        updateUserProfile({
          displayName: fullname,
          photoURL: imageBbRes.data.data.display_url,
        }).then(() => {
          const newUser = {
            fullname,
            email,
            role: "user",
          };
          axios.post("/users", newUser).then((res) => {
            console.log(res.data);
          });
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="w-full min-h-screen bg-[url(/img/bg.jpeg)] bg-fixed bg-no-repeat bg-cover bg-center pt-10">
      <div className="max-w-xl mx-auto bg-[#121a23] py-8 px-10 rounded-lg">
        <div className="text-white50">
          <h2 className="text-5xl font-bold mb-3 font-zentry">
            CREATE YOUR ACCOUNT
          </h2>
          <p className="font-outfit text-[#adb0bc]">
            Hey there! Ready to join the party? We just need a few details from
            you to get started. Let's do this!
          </p>
        </div>

        <form onSubmit={handleSubmit(handleSignup)}>
          {/* Fullname */}
          <div className="mb-4">
            <label className="block text-white50 font-bold mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              required
              {...register("fullname", {
                minLength: {
                  value: 4,
                  message: "FullName should be at least 4 characters.",
                },
              })}
              className="w-full py-3 px-5 border border-[rgb(76,76,76,0.2)] rounded-xs text-white50 bg-[#182029] leading-tight focus:outline-none focus:ring-1 focus:ring-yellow300"
            />
            {errors.fullname && (
              <p className="text-red-600">{errors.fullname.message}</p>
            )}
          </div>

          {/* Image input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              required
              {...register("imageFile")}
              className="w-full py-3 px-5 border border-[rgb(76,76,76,0.2)] rounded-xs text-white50 bg-[#182029] leading-tight focus:outline-none focus:ring-1 focus:ring-yellow300"
            />
            {errors.photoUrl && (
              <p className="text-red-500">{errors.photoUrl.message}</p>
            )}
          </div>

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
              className="w-full py-3 px-5 border border-[rgb(76,76,76,0.2)] rounded-xs text-white50 bg-[#182029] leading-tight focus:outline-none focus:ring-1 focus:ring-yellow300"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              required
              {...register("password", {
                minLength: {
                  value: 6,
                  message: "Password should be at least 6 characters.",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z]).*$/,
                  message:
                    "Password must contain at least one UPPERCASE and one lowercase letter",
                },
              })}
              className="w-full py-3 px-5 border border-[rgb(76,76,76,0.2)] rounded-xs text-white50 bg-[#182029] leading-tight focus:outline-none focus:ring-1 focus:ring-yellow300"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Captcha validation */}
          <div className="items-center gap-3">
            <Captcha
              generatedCaptcha={generatedCaptcha}
              setGeneratedCaptcha={setGeneratedCaptcha}
            ></Captcha>

            <input
              {...register("captcha", { required: "Captcha is required" })}
              placeholder="Enter captcha"
              className="w-full py-3 px-5 border border-[rgb(76,76,76,0.2)] rounded-xs text-white50 bg-[#182029] leading-tight focus:outline-none focus:ring-1 focus:ring-yellow300"
            />
            {errors.captcha && (
              <p className="text-red-500">{errors.captcha.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-5 mt-3 border border-[rgb(76,76,76,0.2)] rounded-xs text-black500 font-bold bg-yellow300 leading-tight focus:outline-none focus:ring-1 focus:ring-yellow300"
          >
            Sign Up
          </button>

          {/* LogIn Page Link */}
          <p className="text-center text-gray-600 mt-3">
            Already have an account?{" "}
            <Link to={"/logIn"} className="text-blue-500 hover:text-blue-700">
              Log In
            </Link>
          </p>
        </form>

        {/* Social SignUp */}
        <Google></Google>
      </div>
    </div>
  );
};

export default Signup;
