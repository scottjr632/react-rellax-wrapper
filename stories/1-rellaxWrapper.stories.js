import React, { useState } from 'react'

import RellaxWrapper from '../src'

import './index.css'

export default {
  title: 'Rellax Wrapper',
  component: RellaxWrapper
}

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
)

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
)

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
)

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
  )
}