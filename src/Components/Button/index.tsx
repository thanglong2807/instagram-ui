import React, { FC } from "react";
import Style from "./style";

interface ButtonProps {
  leftIcon?: string;
  leftText?: string;
  title: string;
  className?: string;
  onClick?: any;
}

const Button: FC<ButtonProps> = ({
  leftIcon,
  leftText,
  title,
  className,
  onClick,
}) => {
  return (
    <Style onClick={onClick} className={className}>
      {leftIcon ? <img src={leftIcon} alt="" /> : null}
      {leftText ? <span>{leftText}</span> : null}

      <span className="text-btn"> {title}</span>
    </Style>
  );
};

export default Button;
