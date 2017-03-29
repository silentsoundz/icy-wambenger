
const chunk = (array, groupSize)=>{
  let outerArray = []
    for(let i = 0; i < array.length; ){
      let innerArray = array.splice(i, groupSize)
        outerArray.push(innerArray)
  }
      return outerArray
}

module.exports = chunk;
