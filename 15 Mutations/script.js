// function mutation(arr) {

// //   var s = "overpopulation";
// // for (var i = 0; i < s.length; i++) {
// //     console.log(s.charAt(i));
// // }

//   console.log(arr);

//   // var arr1=arr[0];
//   var arr1=arr.slice(0,1);
//   var arr2=arr.slice(1,2);

//   console.log(arr1);
//   console.log(arr2);

//   var string1=arr1.toString();
//   var string2=arr2.toString();

//   console.log(string1);
//   console.log(string2);

//   console.log(string1.length);
//   console.log(string2.length);

//   for (var i = 0; i < string1.length; i++) {
//     for (var k=0;k<string2.length;k++){
//       if(string1[i]===string2[k]){
//         k=string2.length;
//       }

//       console.log(string1[i]);
//     }
// }

//   // var newarr1=arr1.split(' ');
//   // var newarr3=arr3.split(' ');
//   console.log(newarr1);
//   console.log(newarr3);
//   // console.log(arr2);
//   return arr;
// }

function mutation(arr) {
  var answer;
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    // console.log(target.indexOf(test[i]));
    if (target.indexOf(test[i]) < 0){
      answer=false;  

      i=test.length;

    } else{
      answer=true;
      
    
    }
    
  }
  console.log(answer);
  return arr;
}
mutation(["hello", "heti"]);
// mutation(["floor", "for"])