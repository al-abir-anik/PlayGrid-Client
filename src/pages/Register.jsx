import { useContext, useState } from "react";
import AuthContext from "../auth/AuthContext";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Captcha from "../auth/Captcha";
import { FcGoogle } from "react-icons/fc";
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    loginUser,
    setUser,
    createUser,
    updateUserProfile,
    setAuthLoading,
  } = useContext(AuthContext);

  const [state, setState] = useState("login");
  const [generatedCaptcha, setGeneratedCaptcha] = useState("aaA56");
  const [showPassword, setShowPassword] = useState(true);

  const onLoginSubmit = (email, password, captcha) => {
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
        navigate("/");
        console.log(result.user);
        toast.success("Login Successful");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Login failed! Try again.");
        setAuthLoading(false);
      });
  };

  const onSignupSubmit = (name, email, password, captcha) => {
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

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const updateUser = result.user;
        setUser(updateUser);
        updateUserProfile({ displayName: name });
        navigate("/");
        toast.success("Signup Successful!");

        axios
          .post(`http://localhost:5000/new-user`, {
            email: updateUser?.email,
            cartItems: [],
            wishItems: [],
            ownedGames: [],
            favourites: [],
          })
          .then((res) => console.log(res.data))
          .catch((err) => console.error("Backend error:", err));
      })
      .catch((error) => {
        setAuthLoading(false);
        console.log(error.message);
        toast.error("Signup failed! Try again.");
      });
  };

  // Dynamic form submit handler
  const userRegister = (data) => {
    const { name, email, password, captcha } = data;
    if (state === "login") {
      onLoginSubmit(email, password, captcha);
    } else {
      onSignupSubmit(name, email, password, captcha);
    }
  };

  return (
    <div className="min-h-[80vh] mx-auto flex justify-between bg-black700 text-white50">
      <div className="w-full hidden lg:inline-block">
        <img
          src="/img/gallery-5.webp"
          alt="leftSideImage"
          className="h-full opacity-80 object-cover"
        />
      </div>

      <div className="w-full my-10 flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit(userRegister)}
          className="md:w-96 w-80 space-y-4 flex flex-col items-center justify-center"
        >
          <div className="text-center">
            <h2 className="text-4xl font-medium">
              {state === "login" ? "Log in" : "Sign up"}
            </h2>
            <p className="text-sm text-offWhite50 mt-3">
              {state === "login"
                ? "Welcome back! Please login to continue."
                : "Hey there! Ready to join the party?"}
            </p>
          </div>

          {/* social login */}
          <button
            type="button"
            className="w-full p-2.5 mt-2 flex items-center justify-center gap-3 rounded-2xl bg-black500 border border-transparent hover:border-primary transition-colors cursor-pointer"
          >
            <FcGoogle className="text-lg" />
            Continue with Google
          </button>

          <div className="flex items-center gap-4 w-full mb-4">
            <div className="w-full h-px bg-black100"></div>
            <p className="w-fit text-nowrap text-sm text-black100">
              or login with email
            </p>
            <div className="w-full h-px bg-black100"></div>
          </div>

          {/* name */}
          {state === "signup" && (
            <div className="w-full">
              <input
                {...register("name", {
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters.",
                  },
                })}
                type="text"
                required
                placeholder="Fulllname"
                className="input-box"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-400/90">
                  {errors.name.message}
                </p>
              )}
            </div>
          )}

          {/* email */}
          <div className="w-full">
            <input
              {...register(
                "email",
                {
                  minLength: {
                    value: 7,
                    message: "enter a valid email.",
                  },
                },
                { required: "Email is required" }
              )}
              type="email"
              placeholder="Email id"
              className="input-box"
            />
            {errors.email && (
              <p className="mt-3 text-sm text-red-400/90">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* password */}
          <div className="w-full relative">
            <input
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
              type={showPassword ? "text" : "password"}
              required
              placeholder="Password"
              className="input-box"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="p-2 absolute top-1.5 right-2 text-lg cursor-pointer"
            >
              {showPassword ? <LuEyeOff /> : <LuEye />}
            </button>
            {errors.password && (
              <p className="mt-3 text-sm text-red-400/90">
                {errors.password.message}
              </p>
            )}
            <span className="mt-2 flex justify-end">
              <a
                href="#"
                className="w-fit text-sm text-offWhite50 hover:text-white50 underline"
              >
                Forgot password?
              </a>
            </span>
          </div>

          {/* Captcha Input */}
          <div className="w-full space-y-4">
            <Captcha
              generatedCaptcha={generatedCaptcha}
              setGeneratedCaptcha={setGeneratedCaptcha}
            ></Captcha>

            <input
              {...register("captcha", { required: "Captcha is required" })}
              type="text"
              placeholder="Enter captcha"
              className="input-box"
            />
            {errors.captcha && (
              <p className="mt-3 text-sm text-red-400/90">
                {errors.captcha.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="mt-2 w-full h-11 text-black700 font-medium bg-primary hover:opacity-90 rounded-2xl transition-opacity cursor-pointer"
          >
            {state === "signup" ? "Sign up" : "Log in"}
          </button>

          {state === "signup" ? (
            <p className="text-black100 text-sm">
              Already have an account?{" "}
              <span
                onClick={() => setState("login")}
                className="text-primary hover:underline cursor-pointer"
              >
                Log in
              </span>
            </p>
          ) : (
            <p className="text-black100 text-sm">
              Don’t have an account?{" "}
              <span
                onClick={() => setState("signup")}
                className="text-primary hover:underline cursor-pointer"
              >
                Sign up
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
