import { classes } from "@/app/utils/style";
import { forwardRef } from "react";

import styles from "./visually-hidden.module.css";

interface VisuallyHiddenProps {
  className?: string;
  showOnFocus?: boolean;
  as?: React.ElementType;
  children?: React.ReactNode;
  visible?: boolean;
}

export const VisuallyHidden = forwardRef(function VisuallyHidden(
  {
    className,
    showOnFocus,
    as: Component = "span",
    children,
    visible,
    ...rest
  }: VisuallyHiddenProps,
  ref
) {
  return (
    <Component
      className={classes(styles.hidden, className)}
      data-hidden={!visible && !showOnFocus}
      data-show-on-focus={showOnFocus}
      ref={ref}
      {...rest}
    >
      {children}
    </Component>
  );
});
