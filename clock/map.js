// const parson=[
//     {id:1, name:'hashi1'},
//     {id:1, name:'hashi2'},

//     {id:1, name:'hashi3'},

//     {id:1, name:'hashi4'}

// ]
// const output=parson.map((item)=>item.id)
// console.log(output);
let num= [1,23,3,4,3,2];
let sum=0;
//const sum=num.reduce((a,b)=>a+b)
for(let i=0;i<num.length; i++){
  sum=sum+num[i]
}
console.log(sum)