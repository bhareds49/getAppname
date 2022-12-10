//index.js

module.exports = function getAppname(string) {
    const myRe = /\.(.*?)\./;
    const myRe2 = /\/\/(.*?)\./;
    const checkRegEx = myRe.exec(string)[1].toString();
    const checkRegEx2 = myRe2.exec(string)[1];
    console.log("check for https: " + checkRegEx2);
    return checkRegEx;
  };


  console.log(
    "This is the App: " +
      getAppname("https://www.t-tricks.com/snippets/css/a-guide-to-flexbox/")
  );