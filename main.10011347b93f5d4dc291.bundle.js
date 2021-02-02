(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1081:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(54),_clientLogger=__webpack_require__(35),_configFilename=__webpack_require__(1082);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1082:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1083:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(361).configure)([__webpack_require__(1084),__webpack_require__(1085)],module,!1)}).call(this,__webpack_require__(104)(module))},1084:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1084},1085:function(module,exports,__webpack_require__){var map={"./components/AmazingBox/AmazingBox.stories.tsx":1091,"./components/AmazingButton/AmazingButton.stories.tsx":1092};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1085},1091:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var objectSpread2=__webpack_require__(126),jsx_runtime=__webpack_require__(71),taggedTemplateLiteral=(__webpack_require__(0),__webpack_require__(215));function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  padding: 100px;\n  border: 2px solid green;\n"]);return _templateObject=function _templateObject(){return data},data}var Box=__webpack_require__(216).a.div(_templateObject());function AmazingBox(_ref){var _ref$madProp=_ref.madProp,madProp=void 0===_ref$madProp?"crazy box":_ref$madProp;return Object(jsx_runtime.jsxs)(Box,{children:["Imma ",madProp," yo!"]})}try{AmazingBox.displayName="AmazingBox",AmazingBox.__docgenInfo={description:"",displayName:"AmazingBox",props:{madProp:{defaultValue:{value:"crazy box"},description:"",name:"madProp",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AmazingBox/AmazingBox.tsx#AmazingBox"]={docgenInfo:AmazingBox.__docgenInfo,name:"AmazingBox",path:"src/components/AmazingBox/AmazingBox.tsx#AmazingBox"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"AmazingBox",component:AmazingBox,args:{madProp:"test"}};var Default=function Template(args){return Object(jsx_runtime.jsx)(AmazingBox,Object(objectSpread2.a)({},args))}.bind({});Default.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <AmazingBox {...args} />"}},Default.parameters)},1092:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var objectSpread2=__webpack_require__(126),jsx_runtime=__webpack_require__(71),taggedTemplateLiteral=(__webpack_require__(0),__webpack_require__(215));function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  padding: 20px;\n  border: 2px solid hotpink;\n"]);return _templateObject=function _templateObject(){return data},data}var Button=__webpack_require__(216).a.button(_templateObject());function AmazingButton(_ref){var _ref$text=_ref.text,text=void 0===_ref$text?"Button text":_ref$text;return Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{children:Object(jsx_runtime.jsx)(Button,{children:text})})}try{AmazingButton.displayName="AmazingButton",AmazingButton.__docgenInfo={description:"",displayName:"AmazingButton",props:{text:{defaultValue:{value:"Button text"},description:"",name:"text",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AmazingButton/AmazingButton.tsx#AmazingButton"]={docgenInfo:AmazingButton.__docgenInfo,name:"AmazingButton",path:"src/components/AmazingButton/AmazingButton.tsx#AmazingButton"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"AmazingButton",component:AmazingButton};var Default=function Template(args){return Object(jsx_runtime.jsx)(AmazingButton,Object(objectSpread2.a)({},args))}.bind({});Default.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => (\n  <AmazingButton {...args} />\n)"}},Default.parameters)},480:function(module,exports,__webpack_require__){__webpack_require__(481),__webpack_require__(645),__webpack_require__(646),__webpack_require__(804),__webpack_require__(1022),__webpack_require__(1055),__webpack_require__(1060),__webpack_require__(1072),__webpack_require__(1074),__webpack_require__(1079),__webpack_require__(1081),module.exports=__webpack_require__(1083)},554:function(module,exports){},646:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(361)}},[[480,1,2]]]);
//# sourceMappingURL=main.10011347b93f5d4dc291.bundle.js.map