import React, { CSSProperties } from "react";
import "@styles/Button.scss";


type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  const buttonStyle: CSSProperties = {
    
  };
  return (
    <button
      {...{...props, className: "btn-component " + props.className}}
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {props.children}
    </button>
  );
}
