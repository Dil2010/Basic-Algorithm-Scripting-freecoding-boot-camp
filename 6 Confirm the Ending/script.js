function confirmEnding(str, target) {
  var strlength=str.length;
  var targetlength=target.length;
  var slicestart=strlength-targetlength;

  // var newword=str.split('',strlength-targetlength);
  var newword=str.slice(slicestart,strlength)



  // console.log(targetlength);
  console.log(newword);
  // console.log(newword[strlength-1]);
  // console.log(strlength);
  if(newword===target){
    console.log(true);
  }else{
    console.log(false);
  }
  return str;
}

// confirmEnding("Bastian", "n");

// confirmEnding("Congratulation", "on") 

// confirmEnding("Open sesame", "same")

// confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")

confirmEnding("Abstraction", "action")

