var forLoop = function(array){
for(let i = 0; i < 25; i++)
  if(i === 1){
  array.push('I am ${i} strange loop.')
}else {
  array.push('I am ${i} strange loops.')
}
  return array
}

var whileLoop = function(n){
  while (n > 0) {
  console.log(--n)
  }
  return "done"
}


var doWhileLoop = function(array){
function maybeTrue() {
  return Math.random() >= 0.5
}
do {
  array = array.slice(0,array.length-1) // we didn't need the var because array is already a declared variable (as a parameter)
} while (array.length > 0 && maybeTrue());
return array
}


//we set the var to the parameter b/c it will act as a counter -- iterating each element in the array as long as the condition is true
