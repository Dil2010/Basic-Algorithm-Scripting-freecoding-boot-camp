function frankenSplice(arr1, arr2, n) {

  var arr3;
  var arr4;
  var arr5;
  console.log(arr2);
  arr5=[arr2[n-1]];
  console.log(arr5);

  arr3=arr5.concat(arr1);
  arr4=arr3.concat(arr2.slice(n));
  console.log(arr3);
  console.log(arr4);

  return arr2;
}

// frankenSplice([1, 2, 3], [4, 5, 6], 1);

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)