import React, { FC, useState, useRef, useEffect, useMemo } from 'react'
import Rellax from 'rellax';

interface RellaxWrapperProps extends Rellax.RellaxOptions {
  zIndex?: number
  percentage?: number
  speed?: number
}

const RellaxWrapper: FC<RellaxWrapperProps> = ({ children, zIndex, speed, percentage, ...options}) => {
  const [rellax, setRellax] = useState(null);
  const rellaxElement = useRef(null);

  useEffect(() => {
    if (rellaxElement.current) {
      setRellax(new Rellax(rellaxElement.current, options));
    }
    return () => {
      if (rellax) {
        rellax.destroy()
      }
    }
  }, [rellaxElement])
  return useMemo(() => (
    <div
      ref={rellaxElement}
      data-rellax-speed={speed && speed.toString()}
      data-rellax-zindex={zIndex && zIndex.toString()}
      data-rellax-percentage={percentage && percentage.toString()}
    >
      {children}
    </div>
  ), [rellax])
}

export default RellaxWrapper