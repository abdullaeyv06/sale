let car =  [
    {
    model: "Malibu",
    year: 2017 ,
    color:"white" ,
    horse_forse: 100 ,
    wheels : 4 , 
    beaten:false ,
    owner: true, 
    price: 32000 
} , 
 
{
    model: "Jentra",
    year: 2020,
    color:"white" ,
    horse_forse: 102,
    wheels : 4 , 
    beaten:false ,
    owner: true, 
    price: 16000
} , 
{
    model: "Matiz",
    year: 2023 ,
    color:"white" ,
    horse_forse: 10 ,
    wheels : 4 , 
    beaten:false ,
    owner: true, 
    price: 6500
} , 
{
    model: "Damaz",
    year: 2020 ,
    color:"white" ,
    horse_forse: 100 ,
    wheels : 4 , 
    beaten:false ,
    owner: true, 
    price: 5000
} , 
{
    model: "Spark",
    year: 2000 ,
    color:"white" ,
    horse_forse: 100 ,
    wheels : 4 , 
    beaten:false ,
    owner: true, 
    price: 13000
} , 
]   
 
let sale = +prompt("sale")

let sales = car.filter(item =>  item.price = item.price / 100 * sale -item.price)
console.log(sales);