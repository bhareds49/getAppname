# getAppname

Get the Appname from a URL String

## Install

```
$ npm i getappname
```

## Usage

```js
const getAppname = require('getAppname')

getAppname("www.yahoo.com")
//=> "yahoo"

getAppname("https://codesandbox.io")
//=> "codesandbox"

getAppname("something else")
//=> "link"

tiny(1337);
//=> Uncaught TypeError: Tiny wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
```
