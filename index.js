//index.js

function getAppname(string) {

    if (typeof string !== "string") throw new TypeError("getAppname requires a String!");

    let Appname; 
    //Regex for www. --- .com URLS
    const myRe = /\.(.*?)\./;
    //Regex for http:// --- .com URLS
    const myRe2 = /\/\/(.*?)\./;

    //Run both Regex options on the URL String
    const checkRegEx = myRe.exec(string)//[1].toString();
    const checkRegEx2 = myRe2.exec(string)//[1].toString();

    //if it is a "www" URL, return the App string
    if (checkRegEx) {
         Appname = myRe.exec(string)[1].toString();
    }
    //if it is an "http" URL, return the App string
    else if (checkRegEx2) {
         Appname = myRe2.exec(string)[1].toString();

    }
    //if the String is in any other format, return the word "link"
    else {
         Appname = "link"
    }

    return Appname;
  };



  module.exports = getAppname