const reverseArray = (array) =>{
  const newArray = []
  for (let i=array.length -1; i >= 0; i--){
    newArray.push(array[i])
  }
  return newArray
}
console.log(reverseArray([1,2,3,4,5,6]))
module.exports = reverseArray
