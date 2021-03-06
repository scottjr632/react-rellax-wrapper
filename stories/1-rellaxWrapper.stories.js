import React from 'react';

import RellaxWrapper from '../src';

import './index.css';

export default {
  title: 'Example/Default',
  component: Default,
};

export const Default = () => (
  <div className={'default__container'}>
    <div className={'default__wrapper'}>
      <RellaxWrapper speed={-7}>
        <div className={'icon'}>
          🐌
        </div>
      </RellaxWrapper>
      <RellaxWrapper speed={7}>
        <div className={'icon'}>
          🚀
        </div>
      </RellaxWrapper>
    </div>
    <h3>Vertical Parallex</h3>
  </div>
);
