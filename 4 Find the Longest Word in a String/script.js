function findLongestWordLength(str) {
  let hello=str.split(" ");
  let hellolength=hello.length;
  let longestword="";
  console.log(hellolength);
  console.log(hello);
  console.log(hello[0]);
  console.log(longestword.length);
  for(let i=0;i<hellolength;i++){
    if(longestword.length<hello[i].length){
    longestword=hello[i];
    }else{
      longestword;
    }
  }
  console.log(longestword);
  return str.length;
}

// findLongestWordLength("The quick brown fox jumped over the lazy dog");
findLongestWordLength("The quickewrewwerewrweewr brown fox jumped over the lazy dog");