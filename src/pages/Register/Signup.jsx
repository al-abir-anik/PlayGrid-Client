import { Link, Navigate, useNavigate } from "react-router";
import Google from "../../auth/SocialAuth/Google";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import AuthContext from "../../auth/AuthContext/AuthContext";
import Swal from "sweetalert2";
import Captcha from "../../components/Captcha/Captcha";
import axios from "axios";

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit(handleSignup)}>
          {/* Fullname */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="border p-2 rounded"
            />
            {errors.captcha && (
              <p className="text-red-500">{errors.captcha.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>

          {/* LogIn Page Link */}
          <p className="text-center text-gray-600 mb-6">
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
