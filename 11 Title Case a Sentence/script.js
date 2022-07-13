function titleCase(str) {

var str1 = "flexiple";
var str2 = str1.charAt(0).toUpperCase() + str1.slice(1);
console.log(str2);
console.log('sff');

var str3="";
var str4=" ";

var newstr=str.split(" ");
console.log(newstr);
var newstarlength=newstr.length;
console.log(newstarlength);

for (let i=0;i<newstarlength;i++){
  str3 =str3+newstr[i].charAt(0).toUpperCase()+newstr[i].slice(1)+str4;
}
console.log(str3);
return str;
}

titleCase("I'm a little tea pot");