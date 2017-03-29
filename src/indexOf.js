const indexOf = (array, value, searchStart=0) =>{
  if (searchStart){
    i=searchStart
  }  else {
       i = 0
  }
  for (i; i<array.length; i+=1){
    if  (array[i]===value) return i;
  }
    return -1;
}

module.exports = indexOf
