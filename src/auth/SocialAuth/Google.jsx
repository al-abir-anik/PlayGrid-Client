import { FcGoogle } from "react-icons/fc";

const Google = () => {
  return (
    <div className="w-full text-white50 hover:text-yellow300 flex items-center justify-center gap-3 py-3 px-5 mt-3 border-2 border-[rgb(76,76,76,0.2)] bg-[#182029] rounded-xs font-semibold font-outfit focus:outline-none hover:border-yellow300 transition-colors duration-300 cursor-pointer">
      <FcGoogle />
      <p>Continue with Google</p>
    </div>
  );
};

export default Google;
