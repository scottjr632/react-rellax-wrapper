import React, { useState } from 'react';

import RellaxWrapper from '../src';

import './index.css';

export default {
  title: 'Example/Callback',
  component: Callback,
};

export const Callback = () => {
  const [slowValues, setSlowValues] = useState({x: 0, y: 0});
  const [fastValues, setFastValues] = useState({x: 0, y: 0});
  return (
    <div className={'default__container'}>
      <div className={'default__wrapper'}>
        <RellaxWrapper speed={-7} callback={pos => setSlowValues({...pos})}>
          <div className={'icon'}>
            🐌
            <div className={'text'}>{`X: ${slowValues.x}  Y: ${slowValues.y}`}</div>
          </div>
        </RellaxWrapper>
        <RellaxWrapper speed={7} callback={pos => setFastValues({...pos})}>
          <div className={'icon'}>
            🚀
            <div className={'text'}>{`X: ${fastValues.x}  Y: ${fastValues.y}`}</div>
          </div>
        </RellaxWrapper>
      </div>
      <h3>Using Callback</h3>
    </div>
  );
};