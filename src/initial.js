const allButt  = (array)  => {
  let noButt = []

  for (let i = 0; i < array.length-1; i++)  {
    noButt.push(array[i])
  }

  return noButt
}

module.exports = allButt
