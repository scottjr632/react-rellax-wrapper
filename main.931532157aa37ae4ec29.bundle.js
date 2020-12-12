(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1163:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(382).configure)([__webpack_require__(1164),__webpack_require__(1166),__webpack_require__(1167)],module,!1)}).call(this,__webpack_require__(110)(module))},1164:function(module,exports,__webpack_require__){var map={"./Introduction.stories.mdx":1165};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1164},1165:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(17),__webpack_require__(3),__webpack_require__(6),__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(13),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(217);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.Meta,{title:"Example/Introduction",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("style",null,"\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n  \n"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("h1",{id:"react-rellax-wrapper-"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("a",_extends({parentName:"h1"},{href:"https://github.com/scottjr632/react-rellax-wrapper",target:"_blank",rel:"nofollow noopener noreferrer"}),"React Rellax Wrapper 🎁")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("a",_extends({parentName:"p"},{href:"https://www.npmjs.com/package/react-rellax-wrapper",target:"_blank",rel:"nofollow noopener noreferrer"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("img",_extends({parentName:"a"},{src:"http://img.shields.io/npm/v/react-rellax-wrapper.svg",alt:"NPM version"}))),"\n",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("a",_extends({parentName:"p"},{href:"https://www.npmjs.com/package/react-rellax-wrapper",target:"_blank",rel:"nofollow noopener noreferrer"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("img",_extends({parentName:"a"},{src:"http://img.shields.io/npm/dm/react-rellax-wrapper.svg",alt:"NPM downloads"}))),"\n",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("a",_extends({parentName:"p"},{href:"https://scottjr632.github.io/react-rellax-wrapper/",target:"_blank",rel:"nofollow noopener noreferrer"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("img",_extends({parentName:"a"},{src:"https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg",alt:"Storybook"})))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("h2",{id:"about"},"About"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("p",null,"react-rellax-wrapper provides a react wrapper around the Rellax js library. This allows for a more idomatic React way of handling parallax with the Rellax library."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("p",null,"Rellax Library ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("a",_extends({parentName:"p"},{href:"https://dixonandmoe.com/rellax/",target:"_blank",rel:"nofollow noopener noreferrer"}),"https://dixonandmoe.com/rellax/"),"  "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("h2",{id:"examples"},"Examples"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("a",_extends({parentName:"p"},{href:"https://scottjr632.github.io/react-rellax-wrapper/",target:"_blank",rel:"nofollow noopener noreferrer"}),"Check out the Storybook")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("strong",{parentName:"p"},"Or run your own")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("code",_extends({parentName:"pre"},{className:"language-sh"}),"$ git clone https://github.com/scottjr632/react-rellax-wrapper.git && cd react-rellax-wrapper\n$ npm install\n$ npm run storybook\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("h2",{id:"installing"},"Installing"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("h3",{id:"npm"},"npm"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("code",_extends({parentName:"pre"},{className:"language-sh"}),"$ npm install react-rellax-wrapper\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("h3",{id:"yarn"},"yarn"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("code",_extends({parentName:"pre"},{className:"language-sh"}),"$ yarn add react-rellax-wrapper\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("h2",{id:"getting-started"},"Getting started"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("p",null,"Import RellaxWrapper and wrap the component that you want to add the parralex feature to with RellaxWrapper."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("code",_extends({parentName:"pre"},{className:"language-js"}),"import RellaxWrapper from 'react-rellax-wrapper'\n# or\nimport { RellaxWrapper } from 'react-rellax-wrapper'\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("code",_extends({parentName:"pre"},{className:"language-js"}),"\nconst App = () => (\n  <div>\n    <RellaxWrapper speed={7}>\n      <h1>I am really fast!</h1>\n    </RellaxWrapper>\n    <RellaxWrapper speed={-9} percentage={0.9}>\n      <div>\n        <p>I am really slow</p>\n      </div>\n    </RellaxWrapper>\n  </div>\n)\n\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("h2",{id:"props"},"Props"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("strong",{parentName:"p"},"All props are optional")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("p",null,"If a prop is ommited it will default to the rellax's generic default. For example if speed is omited default speed is -2.",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("br",{parentName:"p"}),"\n","All traditional options for Rellax can also be used such as callback, center, and relativeToWrapper."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("code",_extends({parentName:"pre"},{className:"language-ts"}),"interface RellaxWrapperProps extends Rellax.RellaxOptions {\n    zIndex?: number\n    percentage?: number\n    speed?: number\n    xs?: number\n    mobile?: number\n    tablet?: number\n    desktop?: number\n}\ninterface RellaxOptions {\n    /**\n     * Will run on every animation event\n     * @param positions Object with x and y positions of the rellax element\n     */\n    callback?(positions: { x: number; y: number }): void;\n    /**\n     * Enable the ability to center parallax elements in your viewport\n     */\n    center?: boolean;\n    /**\n     * Enable horizontal parallax. This feature is intended for panoramic style websites, where users scroll horizontally instead of vertically\n     */\n    horizontal?: boolean;\n    /**\n     * Allow decimal pixel values\n     */\n    round?: boolean;\n    /**\n     * A negative value will make it move slower than regular scrolling, and a positive value will make it move faster\n     */\n    speed?: number;\n    /**\n     * Enable vertical parallax\n     */\n    vertical?: boolean;\n    /**\n     * By default, the position of parallax elements is determined via the scroll position of the body. Passing in the wrapper property will tell Rellax to watch that element instead\n     */\n    wrapper?: string | HTMLElement;\n    /**\n     * Do we want rellax element to be relative to the mentioned wrapper.\n     */\n    relativeToWrapper?: boolean;\n}\n\n")))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Example/Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},1166:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1166},1167:function(module,exports,__webpack_require__){var map={"./1-rellaxWrapper.stories.js":1168,"./2-horizontal.stories.js":1173,"./3-centered.stories.js":1174,"./4-callback.stories.js":1175};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1167},1168:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(3);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(24),_src__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(0),__webpack_require__(71));__webpack_require__(211);__webpack_exports__.default={parameters:{storySource:{source:"import React from 'react';\n\nimport RellaxWrapper from '../src';\n\nimport './index.css';\n\nexport default {\n  title: 'Example/Default',\n  component: Default,\n};\n\nexport const Default = () => (\n  <div className={'default__container'}>\n    <div className={'default__wrapper'}>\n      <RellaxWrapper speed={-7}>\n        <div className={'icon'}>\n          🐌\n        </div>\n      </RellaxWrapper>\n      <RellaxWrapper speed={7}>\n        <div className={'icon'}>\n          🚀\n        </div>\n      </RellaxWrapper>\n    </div>\n    <h3>Vertical Parallex</h3>\n  </div>\n);\n",locationsMap:{default:{startLoc:{col:23,line:12},endLoc:{col:1,line:28},startBody:{col:23,line:12},endBody:{col:1,line:28}}}}},title:"Example/Default",component:Default};var Default=function Default(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"default__container",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"default__wrapper",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.a,{speed:-7,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"icon",children:"🐌"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.a,{speed:7,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"icon",children:"🚀"})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3",{children:"Vertical Parallex"})]})};Default.displayName="Default",Default.parameters=Object.assign({storySource:{source:"() => (\n  <div className={'default__container'}>\n    <div className={'default__wrapper'}>\n      <RellaxWrapper speed={-7}>\n        <div className={'icon'}>\n          🐌\n        </div>\n      </RellaxWrapper>\n      <RellaxWrapper speed={7}>\n        <div className={'icon'}>\n          🚀\n        </div>\n      </RellaxWrapper>\n    </div>\n    <h3>Vertical Parallex</h3>\n  </div>\n)"}},Default.parameters),Default.__docgenInfo={description:"",methods:[],displayName:"Default"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/1-rellaxWrapper.stories.js"]={name:"Default",docgenInfo:Default.__docgenInfo,path:"stories/1-rellaxWrapper.stories.js"})},1171:function(module,exports,__webpack_require__){(exports=__webpack_require__(1172)(!1)).push([module.i,'* {\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";;\n}\n\nhtml {\n    font-size: 15px\n}\n\n.black {\n    background-color: black;\n}\n\n.default__container {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    height: 100vh;\n    width: 100%;\n}\n\n.default__wrapper {\n    display: flex;\n    position: absolute;\n    height: 100vh;\n    margin-top: 50vh;\n}\n\n.default__wrapper > div {\n    padding: 0 10rem;\n}\n\n.text {\n    font-size: 2rem;\n}\n\n.icon {\n    font-size: 5rem;\n}\n\n.horizontal__container {\n    position: relative;\n    display: flex;\n    align-items: center;\n    height: 100vh;\n    width: 100%;\n    overflow-y: hidden;\n    overflow-x: scroll;\n    padding-left: 10rem;\n}\n\n.horizontal__container .icon {\n    width: 65vw;\n}',""]),module.exports=exports},1173:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Horizontal",(function(){return Horizontal}));__webpack_require__(3);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(24),_src__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(0),__webpack_require__(71));__webpack_require__(211);__webpack_exports__.default={parameters:{storySource:{source:"import React, { useState } from 'react';\n\nimport RellaxWrapper from '../src';\n\nimport './index.css';\n\nexport default {\n  title: 'Example/Horizontal',\n  component: Horizontal,\n};\n\nexport const Horizontal = () => (\n  <div className={'horizontal__container'} id='wrapper'>\n    <h3>Horizontal Scrolling</h3>\n    <RellaxWrapper speed={-7} horizontal={true} wrapper={'#wrapper'} relativeToWrapper={true}>\n      <div className={'icon'}>\n        🐌\n      </div>\n    </RellaxWrapper>\n    <RellaxWrapper speed={7} horizontal={true} wrapper={'#wrapper'} relativeToWrapper={true}>\n      <div className={'icon'}>\n        🚀\n      </div>\n    </RellaxWrapper>\n  </div>\n);\n",locationsMap:{horizontal:{startLoc:{col:26,line:12},endLoc:{col:1,line:26},startBody:{col:26,line:12},endBody:{col:1,line:26}}}}},title:"Example/Horizontal",component:Horizontal};var Horizontal=function Horizontal(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"horizontal__container",id:"wrapper",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3",{children:"Horizontal Scrolling"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.a,{speed:-7,horizontal:!0,wrapper:"#wrapper",relativeToWrapper:!0,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"icon",children:"🐌"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.a,{speed:7,horizontal:!0,wrapper:"#wrapper",relativeToWrapper:!0,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"icon",children:"🚀"})})]})};Horizontal.displayName="Horizontal",Horizontal.parameters=Object.assign({storySource:{source:"() => (\n  <div className={'horizontal__container'} id='wrapper'>\n    <h3>Horizontal Scrolling</h3>\n    <RellaxWrapper speed={-7} horizontal={true} wrapper={'#wrapper'} relativeToWrapper={true}>\n      <div className={'icon'}>\n        🐌\n      </div>\n    </RellaxWrapper>\n    <RellaxWrapper speed={7} horizontal={true} wrapper={'#wrapper'} relativeToWrapper={true}>\n      <div className={'icon'}>\n        🚀\n      </div>\n    </RellaxWrapper>\n  </div>\n)"}},Horizontal.parameters),Horizontal.__docgenInfo={description:"",methods:[],displayName:"Horizontal"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/2-horizontal.stories.js"]={name:"Horizontal",docgenInfo:Horizontal.__docgenInfo,path:"stories/2-horizontal.stories.js"})},1174:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Centered",(function(){return Centered}));__webpack_require__(3);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(24),_src__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(0),__webpack_require__(71));__webpack_require__(211);__webpack_exports__.default={parameters:{storySource:{source:"import React, { useState } from 'react';\n\nimport RellaxWrapper from '../src';\n\nimport './index.css';\n\nexport default {\n  title: 'Example/Centered',\n  component: Centered,\n};\n\nexport const Centered = () => (\n  <div className={'default__container'}>\n    <div className={'default__wrapper'}>\n      <RellaxWrapper speed={-7} center={true}>\n        <div className={'icon'}>\n          🐌\n        </div>\n      </RellaxWrapper>\n      <RellaxWrapper speed={7} center={true}>\n        <div className={'icon'}>\n          🚀\n        </div>\n      </RellaxWrapper>\n    </div>\n    <h3>Centered Parallex</h3>\n  </div>\n);\n",locationsMap:{centered:{startLoc:{col:24,line:12},endLoc:{col:1,line:28},startBody:{col:24,line:12},endBody:{col:1,line:28}}}}},title:"Example/Centered",component:Centered};var Centered=function Centered(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"default__container",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"default__wrapper",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.a,{speed:-7,center:!0,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"icon",children:"🐌"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.a,{speed:7,center:!0,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"icon",children:"🚀"})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3",{children:"Centered Parallex"})]})};Centered.displayName="Centered",Centered.parameters=Object.assign({storySource:{source:"() => (\n  <div className={'default__container'}>\n    <div className={'default__wrapper'}>\n      <RellaxWrapper speed={-7} center={true}>\n        <div className={'icon'}>\n          🐌\n        </div>\n      </RellaxWrapper>\n      <RellaxWrapper speed={7} center={true}>\n        <div className={'icon'}>\n          🚀\n        </div>\n      </RellaxWrapper>\n    </div>\n    <h3>Centered Parallex</h3>\n  </div>\n)"}},Centered.parameters),Centered.__docgenInfo={description:"",methods:[],displayName:"Centered"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/3-centered.stories.js"]={name:"Centered",docgenInfo:Centered.__docgenInfo,path:"stories/3-centered.stories.js"})},1175:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Callback",(function(){return Callback}));__webpack_require__(18),__webpack_require__(14),__webpack_require__(3);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(24),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),_src__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(71);__webpack_require__(211);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_exports__.default={parameters:{storySource:{source:"import React, { useState } from 'react';\n\nimport RellaxWrapper from '../src';\n\nimport './index.css';\n\nexport default {\n  title: 'Example/Callback',\n  component: Callback,\n};\n\nexport const Callback = () => {\n  const [slowValues, setSlowValues] = useState({x: 0, y: 0});\n  const [fastValues, setFastValues] = useState({x: 0, y: 0});\n  return (\n    <div className={'default__container'}>\n      <div className={'default__wrapper'}>\n        <RellaxWrapper speed={-7} callback={pos => setSlowValues({...pos})}>\n          <div className={'icon'}>\n            🐌\n            <div className={'text'}>{`X: ${slowValues.x}  Y: ${slowValues.y}`}</div>\n          </div>\n        </RellaxWrapper>\n        <RellaxWrapper speed={7} callback={pos => setFastValues({...pos})}>\n          <div className={'icon'}>\n            🚀\n            <div className={'text'}>{`X: ${fastValues.x}  Y: ${fastValues.y}`}</div>\n          </div>\n        </RellaxWrapper>\n      </div>\n      <h3>Using Callback</h3>\n    </div>\n  );\n};",locationsMap:{callback:{startLoc:{col:24,line:12},endLoc:{col:1,line:34},startBody:{col:24,line:12},endBody:{col:1,line:34}}}}},title:"Example/Callback",component:Callback};var Callback=function Callback(){var _useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_4__.useState)({x:0,y:0}),2),slowValues=_useState2[0],setSlowValues=_useState2[1],_useState4=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_4__.useState)({x:0,y:0}),2),fastValues=_useState4[0],setFastValues=_useState4[1];return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"default__container",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"default__wrapper",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.a,{speed:-7,callback:function callback(pos){return setSlowValues(Object.assign({},pos))},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"icon",children:["🐌",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"text",children:"X: ".concat(slowValues.x,"  Y: ").concat(slowValues.y)})]})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.a,{speed:7,callback:function callback(pos){return setFastValues(Object.assign({},pos))},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"icon",children:["🚀",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"text",children:"X: ".concat(fastValues.x,"  Y: ").concat(fastValues.y)})]})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3",{children:"Using Callback"})]})};Callback.displayName="Callback",Callback.parameters=Object.assign({storySource:{source:"() => {\n  const [slowValues, setSlowValues] = useState({x: 0, y: 0});\n  const [fastValues, setFastValues] = useState({x: 0, y: 0});\n  return (\n    <div className={'default__container'}>\n      <div className={'default__wrapper'}>\n        <RellaxWrapper speed={-7} callback={pos => setSlowValues({...pos})}>\n          <div className={'icon'}>\n            🐌\n            <div className={'text'}>{`X: ${slowValues.x}  Y: ${slowValues.y}`}</div>\n          </div>\n        </RellaxWrapper>\n        <RellaxWrapper speed={7} callback={pos => setFastValues({...pos})}>\n          <div className={'icon'}>\n            🚀\n            <div className={'text'}>{`X: ${fastValues.x}  Y: ${fastValues.y}`}</div>\n          </div>\n        </RellaxWrapper>\n      </div>\n      <h3>Using Callback</h3>\n    </div>\n  );\n}"}},Callback.parameters),Callback.__docgenInfo={description:"",methods:[],displayName:"Callback"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/4-callback.stories.js"]={name:"Callback",docgenInfo:Callback.__docgenInfo,path:"stories/4-callback.stories.js"})},211:function(module,exports,__webpack_require__){var api=__webpack_require__(1170),content=__webpack_require__(1171);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},505:function(module,exports,__webpack_require__){__webpack_require__(506),__webpack_require__(729),__webpack_require__(730),__webpack_require__(886),__webpack_require__(1104),__webpack_require__(1137),__webpack_require__(1142),__webpack_require__(1154),__webpack_require__(1156),__webpack_require__(1161),module.exports=__webpack_require__(1163)},599:function(module,exports){},71:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(17),__webpack_require__(21),__webpack_require__(6),__webpack_require__(9),__webpack_require__(19);var jsx_runtime=__webpack_require__(24),react=__webpack_require__(0),rellax_rellax=__webpack_require__(502),rellax_default=__webpack_require__.n(rellax_rellax);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var rellaxWrapper_RellaxWrapper=function RellaxWrapper(_ref){var children=_ref.children,className=_ref.className,zIndex=_ref.zIndex,speed=_ref.speed,mobile=_ref.mobile,tablet=_ref.tablet,desktop=_ref.desktop,percentage=_ref.percentage,xs=_ref.xs,style=_ref.style,options=_objectWithoutProperties(_ref,["children","className","zIndex","speed","mobile","tablet","desktop","percentage","xs","style"]),_useState2=_slicedToArray(Object(react.useState)(null),2),rellax=_useState2[0],setRellax=_useState2[1],rellaxElement=Object(react.useRef)(null);return Object(react.useEffect)((function(){return rellaxElement.current&&setRellax(new rellax_default.a(rellaxElement.current,options)),function(){rellax&&rellax.destroy()}}),[rellaxElement]),Object(jsx_runtime.jsx)("div",{ref:rellaxElement,"data-rellax-speed":speed&&speed.toString(),"data-rellax-xs-speed":xs&&xs.toString(),"data-rellax-mobile-speed":mobile&&mobile.toString(),"data-rellax-tablet-speed":tablet&&tablet.toString(),"data-rellax-desktop-speed":desktop&&desktop.toString(),"data-rellax-zindex":zIndex&&zIndex.toString(),"data-rellax-percentage":percentage&&percentage.toString(),className:className,style:style,children:children})};rellaxWrapper_RellaxWrapper.displayName="RellaxWrapper";var src_rellaxWrapper=rellaxWrapper_RellaxWrapper;try{rellaxWrapper.displayName="rellaxWrapper",rellaxWrapper.__docgenInfo={description:"",displayName:"rellaxWrapper",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"number"}},percentage:{defaultValue:null,description:"Centered parallax elements in your viewport. 0.5 is centered.",name:"percentage",required:!1,type:{name:"number"}},xs:{defaultValue:null,description:"Specify different speeds for xs devices",name:"xs",required:!1,type:{name:"number"}},mobile:{defaultValue:null,description:"Specify different speeds for mobile devices. Default breakpoint is 576.",name:"mobile",required:!1,type:{name:"number"}},tablet:{defaultValue:null,description:"Specify different speeds for tablets. Default breakpoint is 768.",name:"tablet",required:!1,type:{name:"number"}},desktop:{defaultValue:null,description:"Specify different speeds for desktop devices. Default breakpoint is 1201.",name:"desktop",required:!1,type:{name:"number"}},callback:{defaultValue:null,description:"Will run on every animation event\n@param positions Object with x and y positions of the rellax element",name:"callback",required:!1,type:{name:"(positions: { x: number; y: number; }) => void"}},center:{defaultValue:null,description:"Enable the ability to center parallax elements in your viewport",name:"center",required:!1,type:{name:"boolean"}},horizontal:{defaultValue:null,description:"Enable horizontal parallax. This feature is intended for panoramic style websites, where users scroll horizontally instead of vertically",name:"horizontal",required:!1,type:{name:"boolean"}},round:{defaultValue:null,description:"Allow decimal pixel values",name:"round",required:!1,type:{name:"boolean"}},speed:{defaultValue:null,description:"A negative value will make it move slower than regular scrolling, and a positive value will make it move faster",name:"speed",required:!1,type:{name:"number"}},vertical:{defaultValue:null,description:"Enable vertical parallax",name:"vertical",required:!1,type:{name:"boolean"}},wrapper:{defaultValue:null,description:"By default, the position of parallax elements is determined via the scroll position of the body. Passing in the wrapper property will tell Rellax to watch that element instead",name:"wrapper",required:!1,type:{name:"string | HTMLElement"}},relativeToWrapper:{defaultValue:null,description:"Do we want rellax element to be relative to the mentioned wrapper.",name:"relativeToWrapper",required:!1,type:{name:"boolean"}},breakpoints:{defaultValue:null,description:"Each breakpoint value represents the resolution for mobile, tablet, desktop respectively.",name:"breakpoints",required:!1,type:{name:"[number, number, number]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/rellaxWrapper.tsx#rellaxWrapper"]={docgenInfo:rellaxWrapper.__docgenInfo,name:"rellaxWrapper",path:"src/rellaxWrapper.tsx#rellaxWrapper"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.a=src_rellaxWrapper},730:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(382)}},[[505,1,2]]]);
//# sourceMappingURL=main.931532157aa37ae4ec29.bundle.js.map