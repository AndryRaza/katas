function sumIntervals(intervals){
  
    let filtrage = []
    
    for(i=0;i<intervals.length;i++){
      for(j=0;j<intervals.length;j++){
        if(i!=j)
          {
            if (intervals[i][0] >= intervals[j][0] || intervals[i][1] <= intervals[j][1] )
              {
                let a ;
                let b ;
                if (intervals[i][0] <= intervals[j][0])
                  {
                    a = intervals[i][0]
                  }
                else
                  {
                    a = intervals[j][0]
                  }
                 if (intervals[i][1] >= intervals[j][1])
                  {
                    b = intervals[i][1]
                  }
                else
                  {
                    b = intervals[j][1]
                  }
                filtrage.push([a,b])
              }
          }
      }
    }
    
    console.log(filtrage)
    
    /*let result = 0
    
    const reducer = (accumulator, currentValue) => currentValue - accumulator;
    filtrage.map(e=>{
      result += (e.reduce(reducer))
    })
    
    return result*/
    
  }