import React, { FC, useState, useRef, useEffect } from 'react';
import Rellax from 'rellax';

interface RellaxWrapperProps extends Rellax.RellaxOptions {
  className?: string;
  zIndex?: number;
  percentage?: number;
  xs?: number;
  mobile?: number;
  tablet?: number;
  desktop?: number;
  style?: React.CSSProperties;
}

const RellaxWrapper: FC<RellaxWrapperProps> = ({
  children,
  className,
  zIndex,
  speed,
  mobile,
  tablet,
  desktop,
  percentage,
  xs,
  style,
  ...options
}) => {
  const [rellax, setRellax] = useState(null);
  const rellaxElement = useRef(null);

  useEffect(() => {
    if (rellaxElement.current) {
      setRellax(new Rellax(rellaxElement.current, options));
    }
    return () => {
      if (rellax) {
        rellax.destroy();
      }
    };
  }, [rellaxElement]);
  return (
    <div
      ref={rellaxElement}
      data-rellax-speed={speed && speed.toString()}
      data-rellax-xs-speed={xs && xs.toString()}
      data-rellax-mobile-speed={mobile && mobile.toString()}
      data-rellax-tablet-speed={tablet && tablet.toString()}
      data-rellax-desktop-speed={desktop && desktop.toString()}
      data-rellax-zindex={zIndex && zIndex.toString()}
      data-rellax-percentage={percentage && percentage.toString()}
      className={className}
      style={style}
    >
      {children}
    </div>
  );
};

export default RellaxWrapper;
