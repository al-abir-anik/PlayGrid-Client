const Button = ({
  id,
  title,
  containerClass,
  leftIcon,
  rightIcon,
  onClickFunc,
}) => {
  return (
    <button
      onClick={onClickFunc}
      id={id}
      className={`button-primary group relative z-10 w-fit cursor-pointer overflow-hidden rounded-3xl px-8 py-4 ${containerClass}`}
    >
      <span className="flex justify-center items-center gap-1">
        {leftIcon && <span>{leftIcon}</span>}
        <p className="whitespace-nowrap font-general text-sm font-bold uppercase">
          {title}
        </p>
        {rightIcon && <span>{rightIcon}</span>}
      </span>
    </button>
  );
};

export default Button;
