import React from "react";
import { StyledButton } from "./styles";

export const Button = forwardRef(({ children, minWidth, link, className }, ref) => {
  return (
    <StyledButton
      ref={ref}
      $minWidth={minWidth}
      {...(link ? { href: link } : { as: "button", type: "button" })}
      className={className}
    >
      {children}
    </StyledButton>
  );
});