function chunkArrayInGroups(arr, size) {

  var newarr1=[];
  var newarr2=[];
  var index=arr.length/size;

  for(let k=0;k<size;k++){
    console.log(k);

  for(let i=k*index;i<(k+1)*index;i++){ 
    newarr1.push(arr[i]);  
  }
  newarr2.push(newarr1);
  newarr1=[];

}

  console.log(newarr1);
  console.log(newarr2);

  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d","e", "f"], 2);