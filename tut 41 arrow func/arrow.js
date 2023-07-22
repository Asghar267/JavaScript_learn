console.log(" Arrow Function");

const ar =() =>{
        console.log("aarr");
}

// one liner donot require braces
const greet = () => "hello bugs";
console.log(greet());

// retuning object
const go = () => ({name:"runnig"})
console.log(go());

// only works with single parameter,
// use parantheses to use multiple parameters
const eat = name => name+" is eating";
console.log(eat("ali"));