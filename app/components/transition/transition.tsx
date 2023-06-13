"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import { TransitionContent } from "./transition-content";

interface TransitionProps {
  children: (isPresent: boolean, status: string) => React.ReactNode;
  timeout?: number | { enter: number; exit: number };
  onEnter?: () => void;
  onEntered?: () => void;
  onExit?: () => void;
  onExited?: () => void;
  in: boolean;
  unmount?: boolean;
}

/**
 * A Framer Motion AnimatePresence implementation of `react-transition-group`
 * to be used for vanilla css transitions
 */
export const Transition = ({
  children,
  timeout = 0,
  onEnter,
  onEntered,
  onExit,
  onExited,
  in: show,
  unmount,
}: TransitionProps) => {
  const enterTimeout = useRef();
  const exitTimeout = useRef();

  useEffect(() => {
    if (show) {
      clearTimeout(exitTimeout.current);
    } else {
      clearTimeout(enterTimeout.current);
    }
  }, [show]);

  return (
    <AnimatePresence>
      {(show || !unmount) && (
        <TransitionContent
          timeout={timeout}
          enterTimeout={enterTimeout}
          exitTimeout={exitTimeout}
          onEnter={onEnter}
          onEntered={onEntered}
          onExit={onExit}
          onExited={onExited}
          show={show}
        >
          {children}
        </TransitionContent>
      )}
    </AnimatePresence>
  );
};
