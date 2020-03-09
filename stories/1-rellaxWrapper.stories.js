import React from 'react'

import RellaxWrapper from '../src'

export default {
  title: 'Rellax Wrapper',
  component: Example
}

export const Example = () => (
  <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ display: 'flex', marginTop: '25%' }}>
      <RellaxWrapper speed={-7}>
        <div style={{ height: '100vh', width: '50%' }}>
          I am really slow 🐌
        </div>
      </RellaxWrapper>
      <RellaxWrapper speed={7}>
        <div style={{ height: '100vh', width: '50%' }}>
          I am really fast 🚀
        </div>
      </RellaxWrapper>
    </div>
  </div>
)