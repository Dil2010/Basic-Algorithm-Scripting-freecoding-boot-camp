function getIndexToIns(arr, num) {
  var arrlength=arr.length;
  var newarr=[];
  console.log(arrlength);
  for(i=0;i<arrlength;i++){
    if(arr[i]>=num){
      newarr=newarr.concat(arr[i]);
    }
  }
  console.log(newarr);
  var newarrlength=newarr.length;
  var index=arrlength-newarrlength;
  console.log(index);
  return num;
}

// getIndexToIns([40, 60], 50);

// getIndexToIns([10, 20, 30, 40, 50], 35) 

// getIndexToIns([2, 20, 10], 19)
getIndexToIns([2, 5, 10], 15) 