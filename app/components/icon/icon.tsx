import ArrowLeft from "./svg/arrow-left.svg";
import ArrowRight from "./svg/arrow-right.svg";
import Check from "./svg/check.svg";
import ChevronRight from "./svg/chevron-right.svg";
import Close from "./svg/close.svg";
import Copy from "./svg/copy.svg";
import Error from "./svg/error.svg";
import Figma from "./svg/figma.svg";
import Github from "./svg/github.svg";
import Link from "./svg/link.svg";
import Menu from "./svg/menu.svg";
import Pause from "./svg/pause.svg";
import Play from "./svg/play.svg";
import Send from "./svg/send.svg";
import Twitter from "./svg/twitter.svg";

type Icons = {
  [key: string]: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const icons: Icons = {
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  check: Check,
  chevronRight: ChevronRight,
  close: Close,
  copy: Copy,
  error: Error,
  figma: Figma,
  github: Github,
  link: Link,
  menu: Menu,
  pause: Pause,
  play: Play,
  send: Send,
  twitter: Twitter,
};

type IconProps = {
  icon: string;
  className?: string;
};

export const Icon = ({ icon, className, ...rest }: IconProps) => {
  const IconComponent = icons[icon];

  return <IconComponent className={className} aria-hidden {...rest} />;
};
