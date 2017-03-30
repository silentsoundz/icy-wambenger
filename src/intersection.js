const convergence = (array1, array2)  =>  {
  let finalArray = []

  for (let i = 0; i < array1.length; i++){

    for (let j = 0; j < array2.length; j++ )  {
      if  (array1[i] === array2[j] && !finalArray.includes(array1[i]))  {
        finalArray.push(array1[i])
      }
    }

  }
 return finalArray
}

module.exports = convergence
