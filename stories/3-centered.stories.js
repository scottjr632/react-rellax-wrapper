import React, { useState } from 'react';

import RellaxWrapper from '../src';

import './index.css';

export default {
  title: 'Example/Centered',
  component: Centered,
};

export const Centered = () => (
  <div className={'default__container'}>
    <div className={'default__wrapper'}>
      <RellaxWrapper speed={-7} center={true}>
        <div className={'icon'}>
          🐌
        </div>
      </RellaxWrapper>
      <RellaxWrapper speed={7} center={true}>
        <div className={'icon'}>
          🚀
        </div>
      </RellaxWrapper>
    </div>
    <h3>Centered Parallex</h3>
  </div>
);
