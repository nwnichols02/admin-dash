import React from "react";
import type { BoxProps } from "@mui/material/Box";
import type { Breakpoint } from "@mui/material/styles";
import { layoutClasses } from "./layoutClasses";
import { styled } from "./zero-styled";

export function applyInsetSidebarStyles(params: {
  width: string | Partial<Record<Breakpoint, string>>;
  /**
   * The CSS position property of the sidebar.
   * @default "sticky"
   */
  position?:
  | "fixed"
  | "absolute"
  | "sticky"
  | Record<Breakpoint, "fixed" | "absolute" | "sticky">;
}) {
  const { width, position = "sticky" } = params;
  let positionStyles: Record<string, string> = {};
  if (position && typeof position !== "string") {
    Object.entries(position).forEach(([key, value]) => {
      positionStyles[key] = `var(--${value},)`;
    });
  }
  return {
    width,
    // For `InsetAvoidingView`
    [`.${layoutClasses.Root}:has(&:not(:last-child))`]: {
      [`--InsetSidebarL-width`]: width,
    },
    [`.${layoutClasses.Root}:has(&:last-child)`]: {
      [`--InsetSidebarR-width`]: width,
    },
    ...(typeof width !== "string" && {
      display: {
        xs: "none",
        [Object.keys(width)[0]]: "block",
      },
    }),
    "--InsetSidebar-position":
      typeof position === "string" ? `var(--${position},)` : positionStyles,
  };
}

const InsetSidebarRoot = styled("aside")({
  "--InsetSidebar-position": "var(--sticky)",
  /** DO NOT OVERRIDE, internal variables */
  "--sticky": "var(--InsetSidebar-position,)",
  "--fixed": "var(--InsetSidebar-position,)",
  "--absolute": "var(--InsetSidebar-position,)",
  "--anchor-right": "var(--InsetSidebar-anchor,)",
  "--anchor-left": "var(--InsetSidebar-anchor,)",
  width: "200px",
  position: "relative",
  flexShrink: 0,
  "&:not(:last-child)": {
    "--InsetSidebar-anchor": "var(--anchor-left)",
  },
  "&:last-child": {
    "--InsetSidebar-anchor": "var(--anchor-right)",
  },
  "*:has(> &)": {
    display: "flex",
    flexFlow: "row nowrap",
    flexGrow: 1,
  },
  // TODO: open an issue on Pigment CSS, :where(:not(...)) is not working
  [`*:has(> &) > :not([class*="${layoutClasses.InsetSidebar}"])`]: {
    flexGrow: 1,
    overflow: "auto",
  },
});

const InsetSidebar = React.forwardRef<HTMLDivElement, BoxProps>(
  function InsetSidebar({ className, children, ...props }, ref) {
    return (
      // @ts-expect-error Material UI issue
      <InsetSidebarRoot
        ref={ref}
        className={`${layoutClasses.InsetSidebar} ${className || ""}`}
        {...props}
      >
        {children}
      </InsetSidebarRoot>
    );
  },
);

export default InsetSidebar;
