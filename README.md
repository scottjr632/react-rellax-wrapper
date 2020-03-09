# [React Provider Wrapper 🎁](https://github.com/scottjr632/react-provider-wrapper)

[![NPM version](http://img.shields.io/npm/v/react-provider-wrapper.svg)](https://www.npmjs.com/package/react-provider-wrapper)
[![NPM downloads](http://img.shields.io/npm/dm/react-provider-wrapper.svg)](https://www.npmjs.com/package/react-provider-wrapper)

## About  

React Provider Wrapper wraps your application in all React context providers.
This solves the issue of wrapper hell that can happen when working with multiple providers for an application or section of an application.

__Example of wrapper hell__
```js
const App = () => (
    <FirstProvider>
      <SecondProvider>
        <ThirdProvider>
          <FourthProvider>
            <FifthProvider>
              <FirstConsumer />
              <SecondConsumer />
            </FifthProvider>
          </FourthProvider>
        </ThirdProvider>
      </SecondProvider>
    </FirstProvider>
)
```

## Installing

### npm
```sh
$ npm install react-provider-wrapper
```
### yarn
```sh
$ yarn add react-provider-wrapper
```

## Getting started

Import WrapProviders and each provider into the component that you want to the parent component of the children that you want to consume the provider

```ts
import WrapProviders from 'react-provider-wrapper'
import MockContextProvider from './mockContextProvider.tsx'
import MockSecondContextProvider from './mockSecondContextProvider.tsx'
```  
__Example provider__
```js
import React, { createContext, useState, useContext } from 'react'

const ProviderMockContext = createContext(null)
const MockContextProvider = ({ children }) => {
  const [state, setState] = useState({});
  return (
    <ProviderMockContext.Provider value={{state, setState}}>
      {children}
    </ProviderMockContext.Provider>
  )
}

export const useProviderMock = () => useContext(ProviderMockContext)
export default MockContextProvider
```

__Create array of providers__
```js
const providers = [
    MockContextProvider,
    MockSecondContextProvider
]
```
This can also be refactored out into a module that contains all providers and exports them in an index.{ts,js} file

__Wrap application or parent component with WrapProviders__
```js
    const App = () => (
        <WrapProviders providers={providers}>
            <ConsumerComponent />
            <AnotherConsumerComponent />
        </WrapProviders>
    )
```