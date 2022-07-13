function reverseString() {
  
  var str=prompt("Plese give a word");
  let strlength=str.length;
  console.log(strlength);
  var splitString = str.split(""); 
  console.log(splitString);
  var newArray="";
  var newsplitString = newArray.split(""); 
  for (let i=0;i<strlength;i++){
    newsplitString[strlength-i-1]=splitString[i];
  }
  newArray=newsplitString.join("")
  console.log(newArray);
  return str;

}

reverseString();
