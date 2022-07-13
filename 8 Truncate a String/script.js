function truncateString(str, num) {
  var strlength=str.length;
  console.log(strlength);

  var newstr=str.slice(0,num)+'. . .';
  console.log(newstr);

  return str;
}

// truncateString("A-tisket a-tasket A green and yellow basket", 8);


Waiting:truncateString("Peter Piper picked a peck of pickled peppers", 11)