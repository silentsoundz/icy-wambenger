const lastIndexOf = (array, value, searchStart=array.length)  => {

  for (let i = searchStart -1; i>=0; i--)  {
    if (array[i] === value)  return i;
  }
    return -1
}

module.exports = lastIndexOf
