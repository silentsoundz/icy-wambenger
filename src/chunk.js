
const chunk = (array, groupSize)=>{
  let outerArray = []
  for(let i = 0; i < array.length; ){
    let innerArray = array.splice(i, groupSize)
    console.log('innerArray', innerArray)
    console.log('passed in array is now:', array);
    outerArray.push(innerArray)
  }

  return outerArray
}

module.exports = chunk;
