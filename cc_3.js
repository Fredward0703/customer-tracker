// Creating the customer and step 2
let customers = [
    {name:"Phil Foden",email:"PhilFoden47@email.com",purchases:["Soccer Ball", "Shirt", "Ball Pump"]},
    {name:"Erling Haaland",email:"ErlingHaaland9@email.com",purchases:["Dj Equipment", "Goal Net", "Trophy"]},
    {name:"Bernardo Silva",email:"BernardoSilva20@email.com",purchases:["Flag", "Cleats", "Dog"]},
];


//attempting step 3, adding someone new
customers.push({name:"Ruben Dias",email:"RubenDias3@email.com",purchases:["Blue Moon", "Tooth Paste", "ArmBand"]});
customers.forEach(obj => console.log(`${obj.name}\t|\t${obj.email}\t|\t${obj.purchases}`))