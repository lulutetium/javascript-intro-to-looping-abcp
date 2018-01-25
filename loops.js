function forLoop(array){
  for(let i=0;i<25;i++){
    if(i === 1){
      array.push(`I am 1 strange loop.`);
    }else{
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}

function whileLoop(n){
  while(n>0){
    n=n-1;
    console.log(n);
  }
  return 'done';
}

function doWhileLoop(array){
  function maybeTrue() {
  return Math.random() >= 0.5;
  }
  var l = array[1];
  var newArr = [];
  console.log(newArr);

  do {
    console.log(l);
    l=l-1;
  } while (!!l && !!maybeTrue());
  return newArr;
}