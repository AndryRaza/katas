/*

Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Valid inputs examples:
Examples of valid inputs:
1.2.3.4
123.45.67.89

Invalid input examples:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089

Notes:
Leading zeros (e.g. 01.02.03.04) are considered invalid
Inputs are guaranteed to be a single string

*/
function isValidIP(str) {

    let arr = str.split('.');
  
    //Pour retirer les cas 192..120.10
    arr = arr.filter(f=>{
      return f != ''
    })

    let arr_ =arr.filter(e=>{
      return (e > 255) || (e < 0) || (e.match(/[a-zA-Z//\n\s]+/g)) || (e[0] == '0' && e.length > 1)
    })
    
    return ( arr_.length == 0 && arr.length == 4)
}