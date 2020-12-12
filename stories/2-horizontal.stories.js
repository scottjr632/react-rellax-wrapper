import React, { useState } from 'react';

import RellaxWrapper from '../src';

import './index.css';

export default {
  title: 'Example/Horizontal',
  component: Horizontal,
};

export const Horizontal = () => (
  <div className={'horizontal__container'} id='wrapper'>
    <h3>Horizontal Scrolling</h3>
    <RellaxWrapper speed={-7} horizontal={true} wrapper={'#wrapper'} relativeToWrapper={true}>
      <div className={'icon'}>
        🐌
      </div>
    </RellaxWrapper>
    <RellaxWrapper speed={7} horizontal={true} wrapper={'#wrapper'} relativeToWrapper={true}>
      <div className={'icon'}>
        🚀
      </div>
    </RellaxWrapper>
  </div>
);
