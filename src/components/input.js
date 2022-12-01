import { Field } from "formik";
import { Label } from ".";

const Input = (props) => {
  const { placeholder, classNameLabel, labelName, className, error, ...rest } =
    props;
  return (
    <>
      {labelName && <Label name={labelName} className={classNameLabel} />}
      <Field
        placeholder={placeholder}
        className={`${className || "form-control"} ${
          error ? "is-invalid" : ""
        }`}
        {...rest}
      />
      {error && (
        <div className={"invalid-feedback text-left d-block mb-3"}>{error}</div>
      )}
    </>
  );
};

export default Input;
