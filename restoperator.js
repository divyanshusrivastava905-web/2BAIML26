function sum (...value)
{
    console.log(value);
}
sum(10,20);
sum(10,100,1000);
``

function total(...values){
    let total=0;
    for(let n of values)
        {
            total=total+n;
        }
    return total;
}
console.log(total(10,20,40));
