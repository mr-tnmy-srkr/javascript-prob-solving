// How would you reverse a string in JavaScript?
function reverse(str){
    var rtnStr = '';
    for(var i = str.length-1; i>=0;i--){
      rtnStr +=str[i];
    }
    return rtnStr;
  }
  
console.log( reverse('you are a nice dude'))  //edud ecin a era uoy
