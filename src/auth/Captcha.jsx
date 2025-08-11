const Captcha = ({ generatedCaptcha, setGeneratedCaptcha }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="px-2 text-xs text-offWhite50 rounded-2xl captcha-font">
        {generatedCaptcha}
      </div>
      <button
        type="button"
        onClick={() =>
          setGeneratedCaptcha(
            Math.random()
              .toString(36)
              .substring(2, 7)
              .split("")
              .map((c) =>
                Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()
              )
              .join("")
          )
        }
        className="text-offWhite50 hover:text-white50 text-sm underline cursor-pointer"
      >
        Reload
      </button>
    </div>
  );
};

export default Captcha;
