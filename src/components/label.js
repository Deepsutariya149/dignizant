const Label = (props) => {
  const { name, className, children, ...rest } = props;
  return (
    <label className={className || "form-label"} {...rest}>
      {name}
      {children}
    </label>
  );
};

export default Label;
