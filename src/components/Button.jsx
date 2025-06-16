const Button = ({ id, title, containerClass, leftIcon, rightIcon }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-3xl px-8 py-4 text-blue200 ${containerClass}`}
    >
      <span className="flex items-center gap-1">
        {leftIcon && <span>{leftIcon}</span>}
        <span className="whitespace-nowrap font-general text-sm font-bold uppercase">
          {title}
        </span>
        {rightIcon && <span>{rightIcon}</span>}
      </span>
    </button>
  );
};

export default Button;
