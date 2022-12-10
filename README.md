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

tiny(549);
//=> Uncaught TypeError: getAppname requires a string!

```
