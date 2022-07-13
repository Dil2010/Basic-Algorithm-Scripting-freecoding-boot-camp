function largestOfFour(arr) {
  let newarr=arr[0];
  let newarrlength=arr[0].length;
  let valuarray=0;
  let arraysum=[0,0,0,0];
  var largest=arraysum[0] ;
  var largestindex=0;
  
  console.log(newarr);
  console.log(newarrlength);
  console.log(arr.length);
  for(let i=0;i<arr.length;i++){
    valuarray=arr[i];
    
    for (let k=0;k<arr[i].length;k++){
      arraysum[i]+=valuarray[k];
    }    
    if(largest<arraysum[i]){
      largest=arraysum[i];
      largestindex=i;
    }
  }
  console.log(largestindex);
  console.log(arr[largestindex]);
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

