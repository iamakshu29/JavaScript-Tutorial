let arr = [5,6,2];

let sum = arr.reduce((accumulator, curElem) => {
        debugger;
      return accumulator += curElem;
},0)
console.log(sum);