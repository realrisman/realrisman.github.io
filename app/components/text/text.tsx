import { classes } from "@/app/utils/style";

import styles from "./text.module.css";

interface TextProps {
  className?: string;
  size?: "s" | "m" | "l" | "xl";
  as?: React.ElementType;
  align?: "auto" | "start" | "center";
  weight?: "auto" | "regular" | "medium" | "bold";
  secondary?: boolean;
  children?: React.ReactNode;
}

export const Text = ({
  children,
  size = "m",
  as: Component = "span",
  align = "auto",
  weight = "auto",
  secondary,
  className = "",
  ...rest
}: TextProps) => {
  return (
    <Component
      className={classes(styles.text, className)}
      data-align={align}
      data-size={size}
      data-weight={weight}
      data-secondary={secondary}
      {...rest}
    >
      {children}
    </Component>
  );
};
