import React, { useRef, useEffect, useCallback } from "react";

const useOutside = (
  ref: React.MutableRefObject<HTMLElement>,
  callback: () => void = () => {}
) => {
  const onClickOutside = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (ref.current && !ref.current.contains(target)) {
        callback();
      }
    },
    [callback, ref]
  );

  useEffect(() => {
    document.addEventListener("mouseup", onClickOutside);
    return () => {
      document.removeEventListener("mouseup", onClickOutside);
    };
  }, [onClickOutside]);
};

const ClickOutside = ({
  onClickOutside,
  children,
  wrapperElement: WrapperElement = "div",
  ...rest
}: any) => {
  const wrapperRef = useRef() as React.MutableRefObject<HTMLElement>;
  useOutside(wrapperRef, onClickOutside);
  return (
    <WrapperElement ref={wrapperRef} {...rest}>
      {children}
    </WrapperElement>
  );
};

export default ClickOutside;
