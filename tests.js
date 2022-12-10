const getAppname = require('getAppname')

console.log(getAppname("www.digg.com"))

console.log(getAppname("https://t-tricks.com/snippets/css/a-guide-to-flexbox/"))

console.log(getAppname("google.com"))

console.log(getAppname("https://codesandbox.io/"))

console.log(getAppname("https://www.freecodecamp.org/news/how-to-make-a-beautiful-tiny-npm-package-and-publish-it-2881d4307f78/"))

console.log(getAppname("https://docs.google.com/document/d/1HinbGPcuQgFzBCUdRCLgd3VV8FUD81ehT5y2xRPYWic/edit"))

console.log(getAppname(1))