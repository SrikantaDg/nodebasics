const isEven = (num)=>{
    num = Math.abs(num);
    if(num == 0) return true;
    else if(num==1) return false;
    else return isEven(num-2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(77));
console.log(isEven(52));
console.log(isEven(-6));
console.log(isEven(-31));