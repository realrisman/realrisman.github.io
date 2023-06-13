"use client";

import { usePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface TransitionContentProps {
  children: (isPresent: boolean, status: string) => React.ReactNode;
  timeout: number | { enter: number; exit: number };
  enterTimeout: React.MutableRefObject<number | undefined>;
  exitTimeout: React.MutableRefObject<number | undefined>;
  onEnter?: () => void;
  onEntered?: () => void;
  onExit?: () => void;
  onExited?: () => void;
  show: boolean;
}

export const TransitionContent = ({
  children,
  timeout,
  enterTimeout,
  exitTimeout,
  onEnter,
  onEntered,
  onExit,
  onExited,
  show,
}: TransitionContentProps) => {
  const [status, setStatus] = useState("exited");
  const [isPresent, safeToRemove] = usePresence();
  const [hasEntered, setHasEntered] = useState(false);
  const splitTimeout = typeof timeout === "object";

  useEffect(() => {
    if (hasEntered || !show) return;

    const actualTimeout = splitTimeout ? timeout.enter : timeout;

    clearTimeout(enterTimeout.current);
    clearTimeout(exitTimeout.current);

    setHasEntered(true);
    setStatus("entering");
    onEnter?.();

    enterTimeout.current = window.setTimeout(() => {
      setStatus("entered");
      onEntered?.();
    }, actualTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onEnter, onEntered, timeout, status, show]);

  useEffect(() => {
    if (isPresent && show) return;

    const actualTimeout = splitTimeout ? timeout.exit : timeout;

    clearTimeout(enterTimeout.current);
    clearTimeout(exitTimeout.current);

    setStatus("exiting");
    onExit?.();

    exitTimeout.current = window.setTimeout(() => {
      setStatus("exited");
      safeToRemove?.();
      onExited?.();
    }, actualTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPresent, onExit, safeToRemove, timeout, onExited, show]);

  return <>{children(hasEntered && show ? isPresent : false, status)}</>;
};
