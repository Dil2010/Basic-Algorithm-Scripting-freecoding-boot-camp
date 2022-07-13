function factorialize() {
  let num=prompt('Give us a number?');
  let k=1;
  for(let i=1;i<=num;i++){
     k =k*(i);
  }
  console.log(k);
  return num;
}

factorialize();