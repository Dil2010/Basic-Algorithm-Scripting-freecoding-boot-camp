function repeatStringNumTimes(str, num) {
  for(let i=0;i<num;i++){
    console.log(str+(i+1));
  }
  return str;
}

// repeatStringNumTimes("abc", 4);

// repeatStringNumTimes("abc", -2);

repeatStringNumTimes("*", 8) 