

// 1 to 10
for (let index = 0; index <=10; index++) {
  console.log(`${index}`);    
  //index==5
  if (index==5) {
    break;
  }
}
console.log(`End Loop`);


// 1 to 10
var iteration=0;
for (let index = 1; index <=10; index++) {
    iteration=iteration+1;
    console.log(`iteration start ${iteration}`);
    console.log(`${index}`);    
    //index==5
    if (index==5) {
      continue;
    }
    console.log(`iteration end:${iteration}`);
  }
  console.log(`End Loop`);