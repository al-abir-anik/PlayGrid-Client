const Captcha = ({ generatedCaptcha, setGeneratedCaptcha }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-gray-200 px-4 py-2 rounded captcha-font">
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
        className="text-blue-500 hover:underline text-sm"
      >
        Reload
      </button>
    </div>
  );
};

export default Captcha;
