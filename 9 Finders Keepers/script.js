function findElement(arr, func) {
  var arrlength=arr.length;
  var num;
  // console.log(num);

  for(let i=0;i<arrlength;i++){
    if(func(arr[i])){
      console.log(arr[i]);
      num=arr[i];
      arrlength=i;
    }

    
  }

  return num;
}

// findElement([1, 2, 3, 4], num => num % 2 === 0);

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })

// findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })