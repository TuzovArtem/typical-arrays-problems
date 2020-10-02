exports.min = function min (array) {
  console.log(array);
  if( typeof(array) === 'undefined' || array[0] === undefined){
    console.log('yes')
    return 0;
  }else {
    let min = 0;
    for(let i = 0; i<array.length; i++){
      if(array[i] < min){
        min=array[i];
      }
    }
    return min;
  }
};

exports.max = function max (array) {

  if(typeof(array) === 'undefined' || array[0] === undefined){
    return 0;
  }else {
  let max = 0;
  for(let i = 0; i<array.length; i++){
    if(array[i] > max){
      max=array[i];
    }
  }
  return max;
}
};

exports.avg = function avg (array) {
  if(typeof(array) === 'undefined' || array[0] === undefined){
    return 0;
  }else {
  let sum = 0;
  array.forEach(function(element) { sum+=element });
      
 return sum/array.length;
}
};
