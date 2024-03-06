import React from "react";
import { StyledButton } from "./styles";

export function Button({ children, minWidth, link, className }) {
  return (
    <StyledButton
      $minWidth={minWidth}
      {...(link ? { href: link } : { as: "button", type: "button" })}
      className={className}
    >
      {children}
    </StyledButton>
  );
}