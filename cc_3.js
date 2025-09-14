// Creating the customer and step 2
let customers = [
    {name:"Phil Foden",email:"PhilFoden47@email.com",purchases:["SoccerBall", "Shirt", "BallPump"]},
    {name:"Erling Haaland",email:"ErlingHaaland9@email.com",purchases:["DjEquipment", "GoalNet", "Trophy"]},
    {name:"Bernardo Silva",email:"BernardoSilva20@email.com",purchases:["Flag", "Cleats", "Dog"]},
];
customers.forEach(obj => console.log(`${obj.name}\t|\t${obj.email}\t|\t${obj.purchases}`))