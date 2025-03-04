import React from "react";
import type { BoxProps } from "@mui/material/Box";
import { layoutClasses } from "./layoutClasses";
import { styled } from "./zero-styled";

const StyledInsetAvoidingView = styled("div")({
  marginRight: "var(--InsetSidebarR-width)",
  marginLeft: "var(--InsetSidebarL-width)",
});

const InsetAvoidingView = React.forwardRef<HTMLDivElement, BoxProps>(
  function InsetAvoidingView({ className, ...props }, ref) {
    return (
      // @ts-expect-error Material UI issue
      <StyledInsetAvoidingView
        ref={ref}
        className={`${layoutClasses.InsetAvoidingView} ${className || ""}`}
        {...props}
      />
    );
  },
);

export default InsetAvoidingView;
