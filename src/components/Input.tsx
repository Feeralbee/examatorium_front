import React from "react";
import "@styles/Input.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <div className="input">
      <input ref={ref} {...props} placeholder=""/>
      <div className="input-label">{props.label}</div>
    </div>
  );
});

export default Input;
