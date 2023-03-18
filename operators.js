// operators

const a = {
    valueOf() {
      return 224;
    },
  };
  const b = {
    valueOf() {
      return "hey";
    },
  };
  const c = {
    valueOf() {
      return "some";
    },
  };
  const d = {
    toString() {
      return 22;
    },
  };
  const f = {
    toString() {
      return 5;
    },
  };
  
  // binary + operator
  // . null + undefined    //  NaN
  // . null + true         //  1
  // . null + false        //  0
  // . undefined + true    //  NaN
  // . undefined + false   //  NaN 
  // . undefined + 5       //  NaN
  // . true + false        //  1
  // . true + 2            //  3
  // . false + 4           //  4
  // . false + NaN         //  NaN
  // . 5 + 3               //  8
  // . 5 + NaN             //  NaN
  // . 'hello' + NaN       //  'helloNaN'
  // . 'hello' + a + b + c + d + e + f        //  224heysome2undefined25
  
  console.log( null + undefined)
  console.log(null + true )
  console.log(null + false )
  console.log(undefined + true)
  console.log(undefined + false)
  console.log(undefined + 5 )
  console.log(true + false)
  console.log(true + 2)
  console.log(false + 4)
  console.log(false + NaN )
  console.log(5 + 3)
  console.log(5 + NaN)
  console.log('hello' + NaN)

  
