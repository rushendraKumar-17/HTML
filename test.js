let arr=[1,1,23,43,4,4,7,4];
let uni = arr.reduce((elem)=>{
    if(!values.includes(elem)){
        values.add(elem);
    }
},values);
console.log(uni);