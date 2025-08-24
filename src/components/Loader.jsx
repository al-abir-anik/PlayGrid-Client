const Loader = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center pb-24 absolute inset-0 z-[1000] bg-black700">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 66 66"
        className="spinner w-[230px] h-[145px] relative"
      >
        <circle
          stroke="url(#gradient)"
          r="20"
          cy="33"
          cx="33"
          strokeWidth="1"
          fill="transparent"
          className="path"
        ></circle>
        <linearGradient id="gradient">
          <stop stopOpacity="1" stopColor="#4fb7dd" offset="0%"></stop>
          {/* fe0000 */}
          <stop stopOpacity="0" stopColor="#af3dff" offset="100%"></stop>
        </linearGradient>
      </svg>
    </div>
  );
};

export default Loader;
