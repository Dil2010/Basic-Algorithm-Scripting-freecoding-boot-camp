function bouncer(arr) {
  var arrlength=arr.length;
  var newarr;
  console.log(arrlength);
  for(let i=0;i<arrlength;i++){
    console.log(arr[i]);
    // if(arr[i]){
    //   newarr=newarr+arr[i];
    // }
  }
  // console.log(newarr);
  return arr;
}



bouncer([7, "ate", "", false, 9]);