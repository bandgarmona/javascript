


function display(){
    console.log("display");
}
//1 sec=1000 milli sec
setTimeout(display,9000)


setTimeout( function(){
    console.log(100+100);
},3000);

setTimeout(()=>{
    console.log(`Inside arrow function...`);
},3000);


