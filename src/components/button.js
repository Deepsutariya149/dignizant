const Button = (props) => {
  const { buttonType, buttonLabel, loading, ...restProps } = props;
  if (buttonType === 0) {
    const { className, ...rest } = restProps;
    return (
      <button className={className || "btn btngradient btnwidth"} {...rest}>
        {loading && (
          <i className="fa fa-spinner fa-spin mr-2" aria-hidden="true"></i>
        )}
        {buttonLabel}
      </button>
    );
  }
  const { iconName, imageUrl, href, alt, children, ...rest } = restProps;
  return (
    <a href={href} {...rest}>
      {iconName && <i className={`${iconName}`}></i>}
      {buttonLabel}
      {children}
      {imageUrl && <img src={imageUrl} alt={alt} />}
    </a>
  );
};
export default Button;
