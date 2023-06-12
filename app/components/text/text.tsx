interface TextProps {
  className?: string;
  size?:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
  as?: React.ElementType;
  align?: "left" | "center" | "right" | "justify" | "start" | "end";
  weight?:
    | "thin"
    | "extalight"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
  secondary?: boolean;
  children?: React.ReactNode;
}

export const Text = ({
  children,
  size = "base",
  as: Component = "span",
  align = "left",
  weight = "normal",
  secondary,
  className = "",
  ...rest
}: TextProps) => {
  return (
    <Component
      className={`text-${align} text-${size} font-${weight} ${className}`}
      data-secondary={secondary}
      {...rest}
    >
      {children}
    </Component>
  );
};
