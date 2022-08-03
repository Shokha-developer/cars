let cars = [
    {
        model: "supra",
        color: "red",
        price: 60000,
        company: "toyota",
        engine: "6.5"
    },
    {
        model: "skyline",
        color: "grey",
        price: 50000,
        company: "nissan",
        engine: "5.5"  
    },
    {
        model: "acura",
        color: "white",
        price: 30000,
        company: "mazda",
        engine: "5"
    }

]

let from = +prompt("from")
let to = +prompt("to")

let carAvailable = ""

cars.filter(item => {
    if (item.price >= from && item.price <= to) {
        carAvailable = item
        console.log(carAvailable);
    }else{
        console.log("car is not found")
    }
})




