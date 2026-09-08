function sum (...value)
{
    console.log(value);
}
sum(10,20);
sum(10,100,1000);


function total(first,last,...values){
    let total=0;
    let name="divyanshu";
    for(let n of values)
        {
            total=total+n;
        }
    return total;
}
