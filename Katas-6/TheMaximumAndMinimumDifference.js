  let min = Math.abs(arr1[0] - arr2[0])
  let max = 0
  
  arr1.map(e=>{
    arr2.map(f=>{
     
      let result = Math.abs(e-f);
      if (result < min)
        {
          min = result
        }
      if (result > max)
        {
          max = result
        }
    })
  })
    
    return [max,min]