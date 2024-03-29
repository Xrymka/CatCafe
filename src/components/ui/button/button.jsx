import React, { forwardRef } from "react";
import { StyledButton } from "./styles";

export const Button = forwardRef(({ children, minWidth, link, className, onClick }, ref) => {
  return (
    <StyledButton
      ref={ref}
      $minWidth={minWidth}
      {...(link ? { href: link } : { as: "button", onClick, type: "button" })}
      className={className}
    >
      {children}
    </StyledButton>
  );
});