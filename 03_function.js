


function show() {
    console.log("Show function");

}
show();//function call or invoke
console.log("After function");
show();
show();
show();
show();

var name1="Bill Gates";
var name2="Elon Musk";

var numOne=100;
var numTwo=200;
function swapVariable(valueOne,valueTwo){//arguments
  console.log("Before Swap:",valueOne,valueTwo);
  //var valueOne=100
  //var valueTwo=200
  var temp=valueOne;
  valueOne=valueTwo;
  valueTwo=temp;
  console.log("After swap:",valueOne,valueTwo);
}
swapVariable(numOne,numTwo);
swapVariable(name1,name2);