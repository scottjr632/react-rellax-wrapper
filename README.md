# [React Rellax Wrapper 🎁](https://github.com/scottjr632/react-rellax-wrapper)

[![NPM version](http://img.shields.io/npm/v/react-rellax-wrapper.svg)](https://www.npmjs.com/package/react-rellax-wrapper)
[![NPM downloads](http://img.shields.io/npm/dm/react-rellax-wrapper.svg)](https://www.npmjs.com/package/react-rellax-wrapper)
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://scottjr632.github.io/react-rellax-wrapper/)

## About  

react-rellax-wrapper provides a react wrapper around the Rellax js library. This allows for a more idomatic React way of handling parallax with the Rellax library.

Rellax Library https://dixonandmoe.com/rellax/  

## Examples

[Check out the Storybook](https://scottjr632.github.io/react-rellax-wrapper/)

__Or run your own__
```sh
$ git clone https://github.com/scottjr632/react-rellax-wrapper.git && cd react-rellax-wrapper
$ npm install
$ npm run storybook
```

## Installing

### npm
```sh
$ npm install react-rellax-wrapper
```
### yarn
```sh
$ yarn add react-rellax-wrapper
```

## Getting started 

Import RellaxWrapper and wrap the component that you want to add the parralex feature to with RellaxWrapper.

```js
import RellaxWrapper from 'react-rellax-wrapper'
# or
import { RellaxWrapper } from 'react-rellax-wrapper'
```

```js

const App = () => (
  <div>
    <RellaxWrapper speed={7}>
      <h1>I am really fast!</h1>
    </RellaxWrapper>
    <RellaxWrapper speed={-9} percentage={0.9}>
      <div>
        <p>I am really slow</p>
      </div>
    </RellaxWrapper>
  </div>
)

```

## Props

__All props are optional__

If a prop is ommited it will default to the rellax's generic default. For example if speed is omited default speed is -2.  
All traditional options for Rellax can also be used such as callback, center, and relativeToWrapper.

```ts
interface RellaxWrapperProps extends Rellax.RellaxOptions {
    zIndex?: number
    percentage?: number
    speed?: number
    xs?: number
    mobile?: number
    tablet?: number
    desktop?: number
}
interface RellaxOptions {
    /**
     * Will run on every animation event
     * @param positions Object with x and y positions of the rellax element
     */
    callback?(positions: { x: number; y: number }): void;
    /**
     * Enable the ability to center parallax elements in your viewport
     */
    center?: boolean;
    /**
     * Enable horizontal parallax. This feature is intended for panoramic style websites, where users scroll horizontally instead of vertically
     */
    horizontal?: boolean;
    /**
     * Allow decimal pixel values
     */
    round?: boolean;
    /**
     * A negative value will make it move slower than regular scrolling, and a positive value will make it move faster
     */
    speed?: number;
    /**
     * Enable vertical parallax
     */
    vertical?: boolean;
    /**
     * By default, the position of parallax elements is determined via the scroll position of the body. Passing in the wrapper property will tell Rellax to watch that element instead
     */
    wrapper?: string | HTMLElement;
    /**
     * Do we want rellax element to be relative to the mentioned wrapper.
     */
    relativeToWrapper?: boolean;
}

```
