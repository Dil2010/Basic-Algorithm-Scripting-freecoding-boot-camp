function booWho(bool) {
  var num=true;
  
  console.log(bool);
  console.log(num);
  console.log(bool==num);
  if(bool==num){
    console.log(true);
  }else if(bool===false){
    console.log(true);
  }else{
    console.log(false);
  }
  return bool;
}

// booWho(null);

// booWho(true);

// booWho([1, 2, 3]);

booWho("a");