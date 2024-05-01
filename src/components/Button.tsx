import React from "react";
import "@styles/Button.scss";


type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {
  return (
    <button
      {...{...props, className: "btn-component " + props.className}}
    >
      {props.children}
    </button>
  );
}
