var arg = process.argv.slice(2);
var sum=0;
arg.map(summand=>{
    sum+=Number(summand);
}); 
console.log(sum);