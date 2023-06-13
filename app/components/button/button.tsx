import RouterLink from "next/link";
import { forwardRef } from "react";
import { classes } from "@/app/utils/style";

import Icon from "../icon";
import Loader from "../loader";
import Transition from "../transition";

import styles from "./button.module.css";

const isExternalLink = (href: string | undefined) => {
  return href?.includes("://");
};

interface ButtonProps {
  className?: string;
  as?: React.ElementType;
  secondary?: boolean;
  loading?: boolean;
  loadingText?: string;
  icon?: string;
  iconEnd?: string;
  iconHoverShift?: boolean;
  iconOnly?: boolean;
  children?: React.ReactNode;
  rel?: string;
  target?: string;
  href?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = forwardRef(function Button(
  { href, ...rest }: ButtonProps,
  ref
) {
  if (isExternalLink(href) || !href) {
    return <ButtonContent href={href} ref={ref} {...rest} />;
  }

  return (
    <RouterLink passHref href={href} scroll={false}>
      <ButtonContent href={href} ref={ref} {...rest} />
    </RouterLink>
  );
});

const ButtonContent = forwardRef(function ButtonContent(
  {
    className,
    as,
    secondary,
    loading,
    loadingText = "loading",
    icon,
    iconEnd,
    iconHoverShift,
    iconOnly,
    children,
    rel,
    target,
    href,
    disabled,
    ...rest
  }: ButtonProps,
  ref
) {
  const isExternal = isExternalLink(href);
  const defaultComponent = href ? "a" : "button";
  const Component = as || defaultComponent;

  return (
    <Component
      className={classes(styles.button, className)}
      data-loading={loading}
      data-icon-only={iconOnly}
      data-secondary={secondary}
      data-icon={icon}
      href={href}
      rel={rel || isExternal ? "noopener noreferrer" : undefined}
      target={target || isExternal ? "_blank" : undefined}
      disabled={disabled}
      ref={ref}
      {...rest}
    >
      {!!icon && (
        <Icon
          className={styles.icon}
          data-start={!iconOnly}
          data-shift={iconHoverShift}
          icon={icon}
        />
      )}
      {!!children && <span className={styles.text}>{children}</span>}
      {!!iconEnd && (
        <Icon
          className={styles.icon}
          data-end={!iconOnly}
          data-shift={iconHoverShift}
          icon={iconEnd}
        />
      )}
      <Transition unmount in={loading}>
        {(visible) => (
          <Loader
            className={styles.loader}
            size={32}
            text={loadingText}
            data-visible={visible}
          />
        )}
      </Transition>
    </Component>
  );
});
