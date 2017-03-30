const floor = (number, decimalPlace)  =>  {
  let x = number.toString()

   let y = x.split('.')

    // for (let i = 0; i < y.length; i++)  {
    //  let z = y[0]
    //  return z

     if (decimalPlace)  {
       let p = y[1]
       let u = p.split('')
       let w = u.slice(0, decimalPlace)
       let z = w.parseInt

       return  z

     }
}

console.log(floor(10.576, 2))




// console.log(floor(52.046, 2))
// (52.046).toString() =>>> '52.046'.split('.') >>> ['52','046'] >>> parseInt('52') >>> 52
